import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HttpStatus from 'http-status-codes';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import { signupPayload } from './mocks';
import { getResponseData } from './mocks';

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

it("gets a user's profile", async () => {
  const payload = signupPayload();
  const user = await getResponseData(request.post(BASE_URL).send(payload));

  const { body } = await request
    .get(BASE_URL)
    .set('Authorization', `Bearer ${user.token}`)
    .expect(HttpStatus.OK);

  expect(body.status).toBe('success');
  expect(body.data.phone_number).toBe(payload.phone_number);
  expect(body.data.first_name).toBe(payload.first_name);
  expect(body.data.last_name).toBe(payload.last_name);
  expect(body.data.password).toBeUndefined();
});

it("fails to get a user's profile if the authorization header is missing", async () => {
  const { body } = await request.get(BASE_URL).expect(HttpStatus.UNAUTHORIZED);

  expect(body.status).toBe('error');
  expect(body.message).toBe('Required Authorization header not found');
});
