import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerUi = new DocumentBuilder()
  .setTitle('FlowPay API')
  .setDescription('FlowPay is a software service for fin tech')
  .setVersion('2.0')
  .addBearerAuth()
  .build();
