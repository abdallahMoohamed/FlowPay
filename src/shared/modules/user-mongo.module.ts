import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminRepository } from 'src/models/admin/admin.repository';
import { Admin, AdminSchema } from 'src/models/admin/admin.schema';
import { User, UserSchema } from 'src/models/common/user.schema';
import { Consumer, ConsumerSchema } from 'src/models/consumer/consumer.schema';
import { Merchant, MerchantSchema } from 'src/models/merchant/merchant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        discriminators: [
          { name: Consumer.name, schema: ConsumerSchema },
          { name: Merchant.name, schema: MerchantSchema },
          { name: Admin.name, schema: AdminSchema },
        ],
      },
    ]),
  ],
  providers: [AdminRepository],
  exports: [AdminRepository],
})
export class UserMongoModule {}
