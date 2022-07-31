import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeormConfigFactoryService } from './typeorm-config-factory.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormConfigFactoryService,
      inject: [ConfigService],
    }),
  ],
})
export class TypeormConfigModule {}
