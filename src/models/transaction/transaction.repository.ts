import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Transaction, TransactionDocument } from './transaction.schema';

export class TransactionRepository extends AbstractRepository<Transaction> {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {
    super(transactionModel);
  }
}
