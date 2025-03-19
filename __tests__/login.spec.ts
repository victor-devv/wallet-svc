import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HttpStatus from 'http-status-codes';
import { fakerDE as faker } from '@faker-js/faker';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import { randomPassword } from '../src/server/utils';
import { generatePhoneNumber, getResponseData, getRandom } from './mocks';
import { PasswordRateLimiterService } from '../src/server/services';
import { DAILY_FAILED_LOGIN_TRIES } from '../src/server/constants';
import { LockedOutError } from '../src/server/controllers/base';
import { sanitiseGmailAddress } from '../src/common/utils/misc';

const BASE_URL = '/api/v1/user';

let app: App;
let request: Agent;

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

function signupPayload() {
  let email = faker.internet.email();
  if (email.endsWith('gmail.com')) email = sanitiseGmailAddress(email);

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: getRandom(['female', 'male']),
    dob: faker.date
      .past({ years: 30, refDate: eighteenYearsAgo })
      .toISOString()
      .split('T')[0],
    email,
    location: {
      latitude: faker.location.latitude().toString(),
      longitude: faker.location.longitude().toString(),
      street: faker.location.streetAddress(),
      city: 'Yaba',
      state: 'Lagos'
    },
    password: randomPassword(),
    phone_number: generatePhoneNumber()
  };
}

it('logs in a user', async () => {
  const payload = signupPayload();
  await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const { body } = await request
    .post(`${BASE_URL}/login`)
    .send({ phone_number: payload.phone_number, password: payload.password })
    .expect(HttpStatus.OK);

  const { status, data } = body;

  expect(status).toBe('success');
  expect(data.user.first_name).toBe(payload.first_name);
  expect(data.user.last_name).toBe(payload.last_name);
  expect(data.user.phone_number).toBe(payload.phone_number);
  expect(data.token).toBeDefined();
});

it('fails to login a user that does not exist', async () => {
  const { body } = await request
    .post(`${BASE_URL}/login`)
    .send({ phone_number: generatePhoneNumber(), password: randomPassword() })
    .expect(HttpStatus.NOT_FOUND);

  expect(body.status).toBe('error');
  expect(body.message).toBe('User not found');
});

it('fails to login a user with a wrong password is provided', async () => {
  const payload = signupPayload();
  await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  const { body } = await request
    .post(`${BASE_URL}/login`)
    .send({ phone_number: payload.phone_number, password: randomPassword() })
    .expect(HttpStatus.BAD_REQUEST);

  expect(body.status).toBe('error');
  expect(body.message).toBe(
    `Invalid password entered. You have ${
      DAILY_FAILED_LOGIN_TRIES - 1
    } tries left`
  );
});

it("blocks a user's account after 5 failed login attempts", async () => {
  const payload = signupPayload();
  await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  for (let tries = 1; tries <= 5; tries++) {
    const { body } = await request
      .post(`${BASE_URL}/login`)
      .send({
        phone_number: payload.phone_number,
        password: randomPassword()
      })
      .expect(HttpStatus.BAD_REQUEST);

    const remainingTries = DAILY_FAILED_LOGIN_TRIES - tries;

    expect(body.status).toBe('error');
    expect(body.error_code).toBe(tries < 5 ? 302 : 303);
    expect(body.message).toBe(
      tries < 5
        ? `Invalid password entered. You have ${remainingTries} tr${
            remainingTries > 1 ? 'ies' : 'y'
          } left`
        : new LockedOutError().message
    );
  }
});

it('resets the failed login attempts after a user successfully logs in', async () => {
  const payload = signupPayload();
  await getResponseData(
    request.post(BASE_URL).send(payload).expect(HttpStatus.OK)
  );

  for (let tries = 1; tries <= 4; tries++) {
    await request
      .post(`${BASE_URL}/login`)
      .send({
        phone_number: payload.phone_number,
        password: randomPassword()
      })
      .expect(HttpStatus.BAD_REQUEST);
  }

  const { body } = await request
    .post(`${BASE_URL}/login`)
    .send({
      password: payload.password,
      phone_number: payload.phone_number
    })
    .expect(HttpStatus.OK);

  expect(body.status).toBe('success');
  expect(body.data.user.phone_number).toBe(payload.phone_number);
  expect(body.data.token).toBeDefined();

  expect(
    await PasswordRateLimiterService.getLoginTries(payload.phone_number)
  ).toBe(0);

  expect(
    await PasswordRateLimiterService.getLockedOutStatus(payload.phone_number)
  ).toBeNull();
});
