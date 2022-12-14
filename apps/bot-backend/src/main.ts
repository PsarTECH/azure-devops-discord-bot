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
  const SWAGGER_PATH = '/swagger';
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PATH, app, document);

  await app.listen(port);
  Logger.log(
    `Swagger documentation running on: http://localhost:${port}${SWAGGER_PATH}`,
    bootstrap.name
  );
}

bootstrap().catch(console.error);
