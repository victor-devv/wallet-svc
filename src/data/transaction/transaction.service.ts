import { injectable, inject } from 'inversify';
import { Knex } from 'knex';
import { ulid } from 'ulidx';
import { TYPES } from '@app/common/config/ioc/types';
import {
  TransactionRepository,
  TransactionParticipant,
  Transaction,
  TransactionIns
} from '.';
import { TransactionCategories } from './transaction.typings';
import { User } from '../user';
import { Wallet } from '../wallet';
import {
  Transfer,
  TransferParticipant,
  TransferType,
  TransferRepository
} from '../transfer';

@injectable()
export class TransactionService {
  constructor(
    @inject(TYPES.TransactionRepository) private repo: TransactionRepository,
    @inject(TYPES.TransferRepository)
    private transferRepo: TransferRepository
  ) {}

  transformToTransactionParticipant(
    user: Partial<User>,
    wallet: Wallet,
    category: TransactionCategories = 'transfers'
  ): TransactionParticipant {
    return {
      category,
      id: wallet.user_id,
      ulid: wallet.user_ulid,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      profile_picture: user.profile_picture,
      channel: user.channel,
      account_number: wallet.nuban,
      wallet_balance: wallet.balance,
      wallet_ledger_balance: wallet.ledger_balance
    };
  }

  /**
   * Logs a transfer
   * @param transfer The transfer object
   */
  async logTransfer(transfer: Transfer, trx?: Knex.Transaction) {
    const transaction: TransactionIns = {
      adapter: transfer.adapter || 'democredit',
      sender_category: transfer.sender.category,
      recipient_category: transfer.recipient.category,
      amount: transfer.amount,
      description: transfer.description,
      destination: 'wallet',
      intent: transfer.type,
      recipient: transfer.recipient,
      reference: transfer.reference,
      sender: transfer.sender,
      source: 'wallet',
      status: 'completed'
    };

    return await this.repo.create(transaction, false, trx);
  }

  /**
   * Creates a transaction record for funding the FEE core wallet after a successful funds transfer
   */
  async logTssCreditTransaction(
    user: Partial<User>,
    wallet: Wallet,
    amount: number,
    account_name: string,
    phone_number: string,
    trx?: Knex.Transaction
  ): Promise<Transaction> {
    const id = 0;
    const ulid_nil = '01JP0000000000000000000000';
    const [first_name, last_name] = this.normalizeName(account_name);
    const sender: TransferParticipant = {
      id,
      ulid: ulid_nil,
      first_name,
      last_name,
      phone_number,
      account_number: phone_number,
      channel: 'direct-debit',
      wallet_balance: 0.0,
      wallet_ledger_balance: 0.0
    };

    const recipient = this.transformToTransactionParticipant(user, wallet);
    const transaction: TransactionIns = {
      description: 'Credit TSS Account',
      intent: TransferType.core_tss,
      reference: `tss_${ulid()}`,
      destination: 'wallet',
      status: 'completed',
      source: 'wallet',
      adapter: 'nip',
      recipient,
      amount,
      sender
    };

    return await this.repo.create(transaction, false, trx);
  }

  async logFeeDirectCreditTransaction(
    user: Partial<User>,
    wallet: Wallet,
    amount: number,
    trx?: Knex.Transaction
  ): Promise<Transaction> {
    const id = 0;
    const ulid_nil = '01JP0000000000000000000000';
    const recipient: TransferParticipant = {
      id,
      ulid: ulid_nil,
      last_name: 'Debit',
      first_name: 'Direct',
      phone_number: '0000000000000',
      account_number: '0000000000',
      channel: 'direct-debit',
      wallet_balance: 0.0,
      wallet_ledger_balance: 0.0
    };

    const sender = this.transformToTransactionParticipant(user, wallet);
    const transaction: TransactionIns = {
      description: 'Credit FEE Account',
      intent: TransferType.core_fee,
      reference: `fee_${ulid()}`,
      destination: 'wallet',
      status: 'completed',
      source: 'wallet',
      adapter: 'nip',
      recipient,
      amount,
      sender
    };

    return await this.repo.create(transaction, false, trx);
  }

  async logDirectDebitTransaction(
    amount: number,
    account_name: string,
    account_number: string,
    user: Partial<User>,
    wallet: Wallet,
    narration: string,
    reference: string,
    trx?: Knex.Transaction
  ): Promise<Transaction> {
    const id = null;
    const ulid_nil = null;
    const [first_name, last_name] = this.normalizeName(account_name);
    const recipient: TransferParticipant = {
      id,
      ulid: ulid_nil,
      last_name,
      first_name,
      phone_number: account_number,
      account_number,
      channel: 'direct-debit',
      wallet_balance: 0.0,
      wallet_ledger_balance: 0.0
    };

    const sender = this.transformToTransactionParticipant(user, wallet);

    const transferPayload = {
      description: `Direct Debit: ${narration}`,
      type: TransferType.withdrawal,
      reference,
      recipient,
      sender,
      sender_id: sender.id,
      recipient_id: recipient.id,
      amount
    };

    const transfer = await this.transferRepo.create(transferPayload);

    const transaction: TransactionIns = {
      description: transfer.description,
      intent: TransferType.withdrawal,
      recipient: transfer.recipient,
      reference: transfer.reference,
      destination: 'bank_account',
      sender: transfer.sender,
      amount: transfer.amount,
      status: 'completed',
      source: 'wallet',
      adapter: 'nip'
    };

    return await this.repo.create(transaction, false, trx);
  }

  /**
   * Trims a name gotten from a name enquiry and sanitizes whitespaces
   * @param name Name to normalize
   */
  private normalizeName(name: string) {
    const [first_name, ...rest] = name
      .trim()
      .replace(/([ ,])+/g, ' ')
      .split(' ');

    return [first_name, rest.join(' ')];
  }
}
