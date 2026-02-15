import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Consumer, ConsumerDocument } from './consumer.schema';

export class ConsumerRepository extends AbstractRepository<Consumer> {
  constructor(
    @InjectModel(Consumer.name)
    private readonly consumerModel: Model<ConsumerDocument>,
  ) {
    super(consumerModel);
  }
}
