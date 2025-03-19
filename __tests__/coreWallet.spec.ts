import 'reflect-metadata';
import { groupBy } from 'lodash';
import {
  CoreWalletRepo,
  CORE_WALLETS,
  setupCoreWallets
} from '../src/data/core_wallet';
import DB from '../src/server/db';

beforeAll(async () => {
  await DB.init();
});

afterAll(async () => {
  await DB.disconnect();
});

test('Core wallets setup is idempotent', async () => {
  await setupCoreWallets();
  const wallets1 = await CoreWalletRepo.all({ conditions: {} });
  const wallets1ByType = groupBy(wallets1, (_) => _.type);

  await setupCoreWallets();
  const wallets2 = await CoreWalletRepo.all({ conditions: {} });
  const wallets2ByType = groupBy(wallets2, (_) => _.type);

  expect(wallets1).toHaveLength(CORE_WALLETS.length);
  expect(wallets2).toHaveLength(CORE_WALLETS.length);

  for (const [type, wallets] of Object.entries(wallets1ByType)) {
    const wallet1 = wallets[0];
    const wallet2 = wallets2ByType[type][0];
  
    const result = await CoreWalletRepo.byID(wallet1.id);
    expect(result.id).toBe(wallet2.id);
  }
});
