import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema({
  timestamps: true,
  discriminatorKey: 'type',
})
export class Admin {
  readonly _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  address?: string;
  avatar?: string;
  countryCode: string;
  phoneNumber: string;
  password?: string;
  gender: string;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
