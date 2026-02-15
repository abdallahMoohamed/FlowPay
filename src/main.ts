import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerUi } from './config/docs/swagger.config';
import { RestLoggingInterceptor } from './blocks/interceptors/rest-logging';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get('port');

  const document = SwaggerModule.createDocument(app, swaggerUi);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalInterceptors(new RestLoggingInterceptor());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(json({ limit: '5mb' }));
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(compression());

  app.enableCors();
  await app.listen(port, () => {
    console.warn(`Server running on port ${port}`);
  });
}
bootstrap();
