import { TransferParticipant, TransferType } from '@app/data/transfer';
import { TransactionCategories } from '@app/data/transaction';

/**
 * Typings for a creating a transfer
 */
export interface CreateTransferDTO {
  recipient: TransferParticipant;
  sender: TransferParticipant;
  description: string;
  type: TransferType;
  reference?: string;
  amount: number;
}

/**
 * DTO for transfering funds instantly between customers
 */
export interface TransferDTO {
  amount: number;
  recipient: string;
  description: string;
  category?: TransactionCategories;
  pin: string;
}
