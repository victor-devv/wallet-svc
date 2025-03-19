import { injectable, inject } from 'inversify';
import { TYPES } from '@app/common/config/ioc/types';
import { TransferRepository } from '.';
import { WalletService } from '@app/data/wallet';
import { UserService } from '@app/data/user';
import { TransactionService } from '@app/data/transaction';
import { TransferDTO } from '@app/server/controllers/transfer/transfer.dto';

@injectable()
export class TransferService {
  constructor(
    @inject(TYPES.TransferRepository) private repo: TransferRepository,
    @inject(TYPES.WalletService) private walletService: WalletService,
    @inject(TYPES.UserService) private userService: UserService,
    @inject(TYPES.TransactionService)
    private transactionService: TransactionService
  ) {}

  async transferMoney(user: string, body: TransferDTO) {
    const trx = await this.repo.baseKnex.transaction();

    try {
      await this.userService.validatePin(user, body.pin);
      delete body.pin;
      
      const { senderWallet, recipientWallet } =
        await this.walletService.transfer({
          sender: user,
          recipient: body.recipient,
          amount: body.amount
        });

      const sender = await this.userService.getUserAccount(user, false, {
        return_id: true,
        trx
      });
      const recipient = await this.userService.getUserAccount(
        recipientWallet.user_id,
        false,
        { return_id: true, trx }
      );

      const transfer = await this.repo.create(
        {
          ...body,
          type: 'instant_transfer',
          sender_id: sender._id,
          recipient_id: recipient._id,
          sender: this.transactionService.transformToTransactionParticipant(
            //@ts-ignore
            sender,
            senderWallet,
            body.category
          ),
          recipient: this.transactionService.transformToTransactionParticipant(
            //@ts-ignore
            recipient,
            recipientWallet
          )
        },
        false,
        trx
      );

      //const { reference } = await TransactionLogger.transfer(transfer);
      await trx.commit();

      return { sender: this.walletService.format(senderWallet), transfer };
    } catch (err) {
      await trx.rollback();
      throw err;
    }
  }
}
