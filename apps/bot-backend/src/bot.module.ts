import { Module } from '@nestjs/common';
import { ApplicationModule } from '@psartech/application';
import { ConfigModule } from '@nestjs/config';
import { DevopsMessagesController } from './controllers/devops-messages.controller';

@Module({
  controllers: [DevopsMessagesController],
  imports: [ConfigModule.forRoot(), ApplicationModule],
  providers: [],
})
export class BotModule {}
