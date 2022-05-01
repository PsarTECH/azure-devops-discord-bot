import { Module } from '@nestjs/common';
import { ApplicationModule } from '@psartech/application';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ApplicationModule],
})
export class BotModule {}
