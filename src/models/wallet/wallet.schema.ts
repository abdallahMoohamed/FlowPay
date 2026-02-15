import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { User } from '../common/user.schema';

export type WalletDocument = Wallet & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Wallet {
  readonly _id?: mongoose.Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  ownerId: User | mongoose.Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  balance: number;

  @Prop({ type: Number, required: false })
  maxAmount?: number;
}
export const WalletSchema = SchemaFactory.createForClass(Wallet);
