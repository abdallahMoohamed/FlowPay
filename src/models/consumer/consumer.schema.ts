import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { KYCLevel } from 'src/common/constants';

export type ConsumerDocument = Consumer & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Consumer {
  readonly _id?: mongoose.Types.ObjectId;
  name: string;
  avatar?: string;
  email: string;
  phoneNumber: string;
  password?: string;
  gender: string;
  isDeleted?: boolean;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;

  @Prop({ type: String })
  nationalId?: string;

  @Prop({ type: String })
  address?: string;

  @Prop({ type: String })
  dateOfBirth?: string;

  @Prop({ enum: KYCLevel, default: KYCLevel.NONE })
  kycLevel?: string;
}

export const ConsumerSchema = SchemaFactory.createForClass(Consumer);
