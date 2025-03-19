import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HTTPStatus from 'http-status-codes';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import redis from '../src/common/services/redis';
import { FlaggedWordsForNames } from '../src/server/utils';
import { mockUserRequest } from './mocks';
import { UserExistsError } from '../src/server/controllers/base';

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

it('creates a new account', async () => {
  const payload = mockUserRequest();

  const { body } = await request
    .post(BASE_URL)
    .send(payload)
    .expect(HTTPStatus.OK);

  const { data, status } = body;

  expect(status).toBe('success');
  expect(data.user.first_name).toBe(payload.first_name);
  expect(data.user.last_name).toBe(payload.last_name);
  expect(data.user.channel).toBe(payload.channel);
  expect(data.user.phone_number).toBe(payload.phone_number);
  expect(data.user.profile_picture).toBe(payload.profile_picture);
  expect(data.user.email).toBe(payload.email);
  expect(data.wallet.balance).toBe("0.00");
  expect(data.token).toBeDefined();
});

it('fails to create an account with the same unique credentials as an already existing account', async () => {
  const uniqueCredentials = ['phone_number'];

  const payload = mockUserRequest();

  await request.post(BASE_URL).send(payload).expect(HTTPStatus.OK);

  for (const field of uniqueCredentials) {
    const newPayload = mockUserRequest();

    const res = await request
      .post(BASE_URL)
      .send({ ...newPayload, [field]: payload[field] })
      .expect(HTTPStatus.BAD_REQUEST);

    expect(res.body.status).toBe('error');
    expect(res.body.message).toBe(new UserExistsError().message);
  }
});

it('fails to create an account if a required field is missing', async () => {
  const requiredFields = [
    'first_name',
    'last_name',
    'password',
    'phone_number'
  ];

  for (const field of requiredFields) {
    const payload = mockUserRequest();
    delete payload[field];

    const res = await request
      .post(BASE_URL)
      .send(payload)
      .expect(HTTPStatus.UNPROCESSABLE_ENTITY);

    expect(res.body.status).toBe('error');
    expect(res.status).toBe(HTTPStatus.UNPROCESSABLE_ENTITY);
  }
});

it('fails to create an account if flagged words are sent as names', async () => {
  for (const word of FlaggedWordsForNames) {
    const payload = mockUserRequest();
    payload.first_name = word;

    const res = await request
      .post(BASE_URL)
      .send(payload)
      .expect(HTTPStatus.UNPROCESSABLE_ENTITY);

    expect(res.body.status).toBe('error');
    expect(res.status).toBe(HTTPStatus.UNPROCESSABLE_ENTITY);
  }
});
