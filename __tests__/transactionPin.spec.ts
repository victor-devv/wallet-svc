import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HttpStatus from 'http-status-codes';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import { randomDigits } from '../src/server/utils';
import { signupPayload, getResponseData } from './mocks';
import { PinRateLimiterService } from '../src/server/services';
import {
  FrozenWalletError,
  TransactionPinBlockedError
} from '../src/server/controllers/base';

const BASE_URL = '/api/v1/user';

let app: App;
let request: Agent;

const TRANSACTION_PIN_LOCKED_KEY = 'admin_transaction_pin:limit';
const TRANSACTION_PIN_TRIES_KEY = 'transaction_pin:tries';

beforeAll(async () => {
  redis.init();
  await redis.flushall();

  await DB.init();

  app = new App();
  request = supertest(app.build());

  app.createAccountChannels();
});

afterAll(async () => {
  await DB.disconnect();
});

it('sets and validates a transaction pin', async () => {
  const { token } = await getResponseData(
    request.post(BASE_URL).send(signupPayload()).expect(HttpStatus.OK)
  );

  const payload = { pin: randomDigits(4) };

  await request
    .put(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(payload)
    .expect(HttpStatus.OK);

  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(payload)
    .expect(HttpStatus.OK);

  expect(body.status).toBe('success');
  expect(body.data).toBe(true);
});

it('tries to validate a transaction pin but fails', async () => {
  const { token } = await getResponseData(
    request.post(BASE_URL).send(signupPayload()).expect(HttpStatus.OK)
  );

  const payload = { pin: randomDigits(4) };

  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(payload)
    .expect(HttpStatus.BAD_REQUEST);

  expect(body.status).toBe('error');
  expect(body.error_code).toBe(307);
  expect(body.message).toMatch(
    /Your transaction PIN has not been set, please set it first/
  );
});

it('resets the failed transaction pin attempts after entering the correct one', async () => {
  const payload = signupPayload();
  const { token, user } = await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const pinPayload = { pin: randomDigits(4) };

  await request
    .put(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.OK);

  for (let tries = 1; tries <= 4; tries++) {
    await request
      .post(`${BASE_URL}/transaction/pin`)
      .set('Authorization', `Bearer ${token}`)
      .send({ pin: randomDigits(4) })
      .expect(HttpStatus.BAD_REQUEST);

    expect(await PinRateLimiterService.getTries(user.account_number)).toBe(
      tries
    );
  }

  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send({ pin: pinPayload.pin })
    .expect(HttpStatus.OK);

  expect(body.status).toBe('success');
  expect(body.data).toBe(true);

  expect(await PinRateLimiterService.getTries(payload.phone_number)).toBe(0);
  expect(
    await PinRateLimiterService.isAccountLocked(payload.phone_number)
  ).toBeNull();
});

it('freezes the account after 5 wrong pin attempts', async () => {
  const payload = signupPayload();
  const { token, user } = await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const pinPayload = { pin: randomDigits(4) };

  await request
    .put(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.OK);

  for (let tries = 1; tries <= 4; tries++) {
    const { body } = await request
      .post(`${BASE_URL}/transaction/pin`)
      .set('Authorization', `Bearer ${token}`)
      .send({ pin: randomDigits(4) })
      .expect(HttpStatus.BAD_REQUEST);

    expect(body.error_code).toBe(306);
    expect(await PinRateLimiterService.getTries(user.account_number)).toBe(
      tries
    );
  }

  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send({ pin: randomDigits(4) })
    .expect(HttpStatus.BAD_REQUEST);

  expect(body.status).toBe('error');
  expect(body.error_code).toBe(304);
  expect(body.message).toBe(new TransactionPinBlockedError().message);

  expect(await PinRateLimiterService.getTries(user.account_number)).toBe(4);
  expect(await PinRateLimiterService.isAccountLocked(user.account_number)).toBe(
    '1'
  );
});

it("unblocks a user's account if unfrozen", async () => {
  const payload = signupPayload();
  const { token, user } = await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const pinPayload = { pin: randomDigits(4) };

  await request
    .put(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.OK);

  // simulate admin blocking account
  await Promise.all([
    redis.set(`${TRANSACTION_PIN_LOCKED_KEY}:${user.account_number}`, 1),
    redis.set(`${TRANSACTION_PIN_TRIES_KEY}:${user.account_number}`, 1)
  ]);

  // validate transaction pin
  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.BAD_REQUEST);

  expect(body.error_code).toBe(101);

  // simulate admin unblocking
  await Promise.all([
    redis.del(`${TRANSACTION_PIN_LOCKED_KEY}:${user.account_number}`),
    redis.del(`${TRANSACTION_PIN_TRIES_KEY}:${user.account_number}`)
  ]);

  const { body: response } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.OK);

  expect(response.status).toBe('success');
  expect(response.data).toBe(true);
});

it('does not unblock an account even if transaction pin tries is unlocked by a separate process', async () => {
  const payload = signupPayload();
  const { token, user } = await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const pinPayload = { pin: randomDigits(4) };

  await request
    .put(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.OK);

  // simulate blocking account
  await Promise.all([
    redis.set(`${TRANSACTION_PIN_LOCKED_KEY}:${user.account_number}`, 1),
    redis.set(`${TRANSACTION_PIN_TRIES_KEY}:${user.account_number}`, 1)
  ]);

  // validate transaction pin
  const { body } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.BAD_REQUEST);

  expect(body.error_code).toBe(101);

  // simulate unlocking transaction pin tries
  await redis.del(`${TRANSACTION_PIN_TRIES_KEY}:${user.account_number}`);

  const { body: response } = await request
    .post(`${BASE_URL}/transaction/pin`)
    .set('Authorization', `Bearer ${token}`)
    .send(pinPayload)
    .expect(HttpStatus.BAD_REQUEST);

  expect(response.status).toBe('error');
  expect(body.message).toBe(new FrozenWalletError().message);
  expect(body.error_code).toBe(101);
});
