import 'reflect-metadata';
import supertest, { Agent } from 'supertest';
import HTTPStatus from 'http-status-codes';
import redis from '../src/common/services/redis';
import { App } from '../src/server/app';
import DB from '../src/server/db';
// import { WalletNotFoundError } from '../src/server/controllers/base';
import {
  createDefaultChannels,
  mockUserRequest,
  createSetTransactionPinPayload,
  createWalletFundPayload,
  createWalletTransferPayload
} from './mocks';

const baseUrl = '/api/v1/wallet';
const userBaseUrl = '/api/v1/user';
const transferUrl = '/api/v1/transfer';

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

describe('runs transfer tests', () => {
  it('transfers money between wallets', async () => {
    const firstWalletPayload = mockUserRequest();
    const secondWalletPayload = mockUserRequest();
    const firstWalletPinPayload = createSetTransactionPinPayload();
    const secondWalletPinPayload = createSetTransactionPinPayload();

    const transfer_amount = 1000000;

    const [{ body: firstWalletBody }, { body: secondWalletBody }] =
      await Promise.all([
        await request
          .post(userBaseUrl)
          .send(firstWalletPayload)
          .expect(HTTPStatus.OK),
        await request
          .post(userBaseUrl)
          .send(secondWalletPayload)
          .expect(HTTPStatus.OK)
      ]);

    await Promise.all([
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
        .send(firstWalletPinPayload)
        .expect(HTTPStatus.OK),
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${secondWalletBody.data.token}`)
        .send(secondWalletPinPayload)
        .expect(HTTPStatus.OK)
    ]);

    // fund first wallet
    const { body: fundedFirstWalletBody } = await request
      .post(`${baseUrl}/fund`)
      .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
      .send(createWalletFundPayload(1500000))
      .expect(HTTPStatus.OK);

    const walletTransferPayload = createWalletTransferPayload(
      secondWalletBody.data.wallet.nuban,
      transfer_amount,
      firstWalletPinPayload.pin
    );

    const { body: result } = await request
      .post(transferUrl)
      .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
      .send(walletTransferPayload)
      .expect(HTTPStatus.OK);

    const { body: updatedSecondWalletBody } = await request
      .get(`${baseUrl}`)
      .set('Authorization', `Bearer ${secondWalletBody.data.token}`)
      .expect(HTTPStatus.OK);

    expect(result.data.transfer_reference).toBeDefined();

    // sender should be debited
    expect(result.data.wallet.balance).toBe(
      `${String(fundedFirstWalletBody.data.balance - transfer_amount)}.00`
    );

    // reciever should be credited
    expect(updatedSecondWalletBody.data.balance).toBe(
      `${String(
        Number(secondWalletBody.data.wallet.balance) + transfer_amount
      )}.00`
    );
  });

  it('transfers money between wallets using phone number', async () => {
    const firstWalletPayload = mockUserRequest();
    const secondWalletPayload = mockUserRequest();
    const firstWalletPinPayload = createSetTransactionPinPayload();
    const secondWalletPinPayload = createSetTransactionPinPayload();

    const transfer_amount = 1000000;

    const [{ body: firstWalletBody }, { body: secondWalletBody }] =
      await Promise.all([
        await request
          .post(userBaseUrl)
          .send(firstWalletPayload)
          .expect(HTTPStatus.OK),
        await request
          .post(userBaseUrl)
          .send(secondWalletPayload)
          .expect(HTTPStatus.OK)
      ]);

    await Promise.all([
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
        .send(firstWalletPinPayload)
        .expect(HTTPStatus.OK),
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${secondWalletBody.data.token}`)
        .send(secondWalletPinPayload)
        .expect(HTTPStatus.OK)
    ]);

    // fund first wallet
    const { body: fundedFirstWalletBody } = await request
      .post(`${baseUrl}/fund`)
      .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
      .send(createWalletFundPayload(1500000))
      .expect(HTTPStatus.OK);

    const walletTransferPayload = createWalletTransferPayload(
      secondWalletBody.data.wallet.nuban,
      transfer_amount,
      firstWalletPinPayload.pin
    );

    const { body: result } = await request
      .post(transferUrl)
      .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
      .send(walletTransferPayload)
      .expect(HTTPStatus.OK);

    const { body: updatedSecondWalletBody } = await request
      .get(`${baseUrl}`)
      .set('Authorization', `Bearer ${secondWalletBody.data.token}`)
      .expect(HTTPStatus.OK);

    expect(result.data.transfer_reference).toBeDefined();

    // sender should be debited
    expect(result.data.wallet.balance).toBe(
      `${String(fundedFirstWalletBody.data.balance - transfer_amount)}.00`
    );

    // reciever should be credited
    expect(updatedSecondWalletBody.data.balance).toBe(
      `${String(
        Number(secondWalletBody.data.wallet.balance) + transfer_amount
      )}.00`
    );
  });

  it('prevents a wallet from transferring money to itself', async () => {
    const walletPayload = mockUserRequest();
    const walletPinPayload = createSetTransactionPinPayload();

    // create and fund wallet
    const { body: walletBody } = await request
      .post(userBaseUrl)
      .send(walletPayload)
      .expect(HTTPStatus.OK);

    await request
      .put(`${userBaseUrl}/transaction/pin`)
      .set('Authorization', `Bearer ${walletBody.data.token}`)
      .send(walletPinPayload)
      .expect(HTTPStatus.OK);

    const walletTransferPayload = createWalletTransferPayload(
      walletBody.data.wallet.nuban,
      100,
      walletPinPayload.pin
    );

    const { body } = await request
      .post(transferUrl)
      .set('Authorization', `Bearer ${walletBody.data.token}`)
      .send(walletTransferPayload)
      .expect(HTTPStatus.BAD_REQUEST);

    expect(body.status).toBe('error');
    expect(body.message).toMatch(/You can't transfer money to yourself/);
  });

  test('transfer fails if the sending wallet does not have sufficient funds', async () => {
    const firstWalletPayload = mockUserRequest();
    const secondWalletPayload = mockUserRequest();
    const firstWalletPinPayload = createSetTransactionPinPayload();
    const secondWalletPinPayload = createSetTransactionPinPayload();

    const [{ body: firstWalletBody }, { body: secondWalletBody }] =
      await Promise.all([
        await request
          .post(userBaseUrl)
          .send(firstWalletPayload)
          .expect(HTTPStatus.OK),
        await request
          .post(userBaseUrl)
          .send(secondWalletPayload)
          .expect(HTTPStatus.OK)
      ]);

    await Promise.all([
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
        .send(firstWalletPinPayload)
        .expect(HTTPStatus.OK),
      await request
        .put(`${userBaseUrl}/transaction/pin`)
        .set('Authorization', `Bearer ${secondWalletBody.data.token}`)
        .send(secondWalletPinPayload)
        .expect(HTTPStatus.OK)
    ]);

    const walletTransferPayload = createWalletTransferPayload(
      secondWalletBody.data.wallet.nuban,
      Number(firstWalletBody.data.wallet.balance) + 1,
      firstWalletPinPayload.pin
    );

    const { body } = await request
      .post(transferUrl)
      .set('Authorization', `Bearer ${firstWalletBody.data.token}`)
      .send(walletTransferPayload)
      .expect(HTTPStatus.BAD_REQUEST);

    expect(body.status).toBe('error');
    expect(body.message).toMatch(
      /Unable to complete transfer because you do not have sufficient funds/
    );
  });
});
