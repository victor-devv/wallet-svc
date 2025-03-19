import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HttpStatus from 'http-status-codes';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
import { createDefaultChannels, mockUserRequest } from './mocks';

const baseUrl = '/api/v1/wallet';
const userBaseUrl = '/api/v1/user';

let app: App;
let request: Agent;

beforeAll(async () => {
  redis.init();
  await redis.flushall();

  await DB.dropAllTables();
  await DB.init();

  app = new App();
  request = supertest(app.build());

  await app.createCoreWallets();
  await createDefaultChannels();
}, 12000);

afterAll(async () => {
  await DB.disconnect();
});

describe('runs wallet tests', () => {
  it('creates a new wallet', async () => {
    const payload = mockUserRequest();

    const { body } = await request
      .post(userBaseUrl)
      .send(payload)
      .expect(HttpStatus.OK);

    const { data, status } = body;

    expect(status).toBe('success');
    expect(data.wallet.balance).toBe('0.00');
    expect(data.wallet.is_frozen).toBe(false);
    expect(data.wallet.is_verified).toBe(false);
    expect(data.wallet.has_funded).toBe(false);
  });

  it("gets a user's wallet", async () => {
    const payload = mockUserRequest();

    const { body } = await request
      .post(userBaseUrl)
      .send(payload)
      .expect(HttpStatus.OK);

    const { data } = body;

    await request
      .get(baseUrl)
      .set('Authorization', `Bearer ${data.token}`)
      .expect(HttpStatus.OK);
  });
});
