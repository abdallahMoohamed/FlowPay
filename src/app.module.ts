import { Module } from '@nestjs/common';
import configuration from './config/envs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminDashboardModule } from './admin/admin.module';
import { ConsumerDashboardModule } from './consumer/consumer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database').url,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    AdminDashboardModule,
    ConsumerDashboardModule,
  ],
  controllers: [],
  providers: [
    // AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
