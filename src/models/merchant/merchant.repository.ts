import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Merchant, MerchantDocument } from './merchant.schema';

export class MerchantRepository extends AbstractRepository<Merchant> {
  constructor(
    @InjectModel(Merchant.name)
    private readonly merchantModel: Model<MerchantDocument>,
  ) {
    super(merchantModel);
  }
}
