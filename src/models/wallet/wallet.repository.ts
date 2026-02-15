import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Wallet, WalletDocument } from './wallet.schema';

export class WalletRepository extends AbstractRepository<Wallet> {
  constructor(
    @InjectModel(Wallet.name)
    private readonly walletModel: Model<WalletDocument>,
  ) {
    super(walletModel);
  }
}
