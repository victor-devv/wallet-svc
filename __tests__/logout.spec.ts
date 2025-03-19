import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HttpStatus from 'http-status-codes';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import { signupPayload, getResponseData } from './mocks';

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

it('returns a 422 error if user_id field is missing', async () => {
  const payload = signupPayload();
  const { token } = await getResponseData(request.post(BASE_URL).send(payload));

  const { body } = await request
    .post(`${BASE_URL}/logout`)
    .set('Authorization', `Bearer ${token}`)
    .send({})
    .expect(422);

  expect(body.status).toBe('error');
  expect(body.code).toBe(422);
});

it('returns a 404 error if an invalid user_id field is passed', async () => {
  const payload = signupPayload();
  const user = await getResponseData(request.post(BASE_URL).send(payload));

  const { body } = await request
    .post(`${BASE_URL}/logout`)
    .set('Authorization', `Bearer ${user.token}`)
    .send({ user_id: '123456' })
    .expect(HttpStatus.NOT_FOUND);

  expect(body.status).toBe('error');
  expect(body.code).toBe(HttpStatus.NOT_FOUND);
});
