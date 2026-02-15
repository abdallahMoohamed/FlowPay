import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { User } from '../common/user.schema';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Notification {
  readonly _id?: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  body: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  sender: User | mongoose.Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  receiver: User | mongoose.Types.ObjectId;
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);

