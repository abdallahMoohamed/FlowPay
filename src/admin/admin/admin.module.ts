import { Module } from '@nestjs/common';
import { UserMongoModule } from 'src/shared/modules/user-mongo.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [UserMongoModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
