/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { BotModule } from './bot.module';

async function bootstrap() {
  const app = await NestFactory.create(BotModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(port);
  Logger.log(`Swagger documentation running on: http://localhost:${port}`);
}

bootstrap().catch(console.error);
