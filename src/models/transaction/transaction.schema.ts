import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { User } from '../common/user.schema';
import { TRANSACTION_TYPE } from 'src/common/constants';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Transaction {
  readonly _id?: mongoose.Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  sender: User | mongoose.Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  receiver: User | mongoose.Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  amount: number;

  @Prop({ enum: TRANSACTION_TYPE, required: true })
  type: TRANSACTION_TYPE;
}
export const TransactionSchema = SchemaFactory.createForClass(Transaction);
