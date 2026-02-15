import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { BUSINESS_TYPES } from 'src/common/constants';
import { MERCHANT_STATUS } from 'src/common/constants/merchant-status.constant';
import { Wallet } from '../wallet/wallet.schema';

export type MerchantDocument = Merchant & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Merchant {
  readonly _id?: mongoose.Types.ObjectId;
  readonly type?: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  avatar?: string;

  @Prop({ type: String, required: false })
  businessName?: string;

  @Prop({ enum: BUSINESS_TYPES, required: false })
  businessType?: string;

  @Prop({ enum: MERCHANT_STATUS, default: MERCHANT_STATUS.PENDING })
  merchantStatus?: string;

  @Prop({ type: String, required: false })
  businessAddress?: string;

  @Prop({ type: String, required: false })
  contactPhone?: string;

  @Prop({ type: String, required: false })
  contactEmail?: string;

  @Prop({ type: Number, default: 0 }) // range between 0-100% (merchant-specific fee rate)
  fees?: number;

  @Prop([{ type: String, required: false }])
  kycDocuments?: string[];

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Wallet' })
  walletId?: Wallet | mongoose.Types.ObjectId;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
