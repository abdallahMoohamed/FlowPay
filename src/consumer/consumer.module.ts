import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer/consumer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ConsumerModule],
  controllers: [],
  providers: [],
})
export class ConsumerDashboardModule {}
