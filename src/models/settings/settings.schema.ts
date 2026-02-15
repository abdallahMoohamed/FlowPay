// Max wallet balance (configurable per user/merchant)
// Daily transfer limit (per kyсLevel)
// Per-transaction max amount
// Rate limiting: X requests per minute (use Redis)

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { SETTINGS_TYPES } from 'src/common/constants/settings-types.constant';

export type SettingsDocument = Settings & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Settings {
  readonly _id?: mongoose.Types.ObjectId;

  @Prop({ type: String, enum: SETTINGS_TYPES, required: true })
  type: string;

  @Prop({ type: Number, default: 0 })
  maxAmount: number;
}
export const SettingsSchema = SchemaFactory.createForClass(Settings);
