import { injectable } from 'inversify';
import { groupBy } from 'lodash';
import { ulid } from 'ulidx';
import { BaseRepository } from '../base';
import { CoreWalletNotFoundError } from '@app/server/controllers/base';
import { CoreWallet, FundCoreWalletDTO, CORE_WALLETS } from '.';

@injectable()
export class CoreWalletRepository extends BaseRepository<CoreWallet> {
  constructor() {
    super('Core Wallet', 'core_wallets');
  }

  /**
   * Gets a core wallet by `type`
   * @param type The type of core wallet to get
   */
  async getCoreWallet(type: string) {
    const coreWallet = await this.byQuery({ conditions: { type } });
    if (!coreWallet) throw new CoreWalletNotFoundError();
    return coreWallet;
  }

  /**
   * Credits a core wallet
   * @param type the core wallet type
   * @param amount the amount to be credited
   */
  async creditCoreWallet(payload: FundCoreWalletDTO) {
    await this.qb
      .whereNull('deleted_at')
      .where({ type: payload.type })
      .increment({
        balance: payload.amount
      });

    const coreWallet = await this.qb
      .whereNull('deleted_at')
      .where({ type: payload.type });

    if (!coreWallet) throw new CoreWalletNotFoundError();
    return coreWallet;
  }

  /**
   * Debits a core wallet
   * @param type the core wallet type
   * @param amount the amount to be debited
   */
  async debitCoreWallet(payload: FundCoreWalletDTO) {
    await this.qb
      .whereNull('deleted_at')
      .where({ type: payload.type })
      .increment({
        balance: -payload.amount
      });

    const coreWallet = await this.qb
      .whereNull('deleted_at')
      .where({ type: payload.type });

    if (!coreWallet) throw new CoreWalletNotFoundError();
    return coreWallet;
  }
}

export const CoreWalletRepo = new CoreWalletRepository();

export async function setupCoreWallets() {
  const wallets = await CoreWalletRepo.all({ conditions: {} });

  const existingTypes = groupBy(wallets, (_) => _.type);
  const missingCoreWallets = CORE_WALLETS.filter(
    (type) => !existingTypes[type]
  );

  if (missingCoreWallets.length > 0) {
    await CoreWalletRepo.qb.insert(
      missingCoreWallets.map((type) => ({ ulid: ulid(), type }))
    );
  }
}
