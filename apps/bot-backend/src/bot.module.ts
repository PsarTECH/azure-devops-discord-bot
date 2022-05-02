import { Module } from '@nestjs/common';
import { ApplicationModule } from '@psartech/application';
import { ConfigModule } from '@nestjs/config';
import { DevopsMessagesControllers } from './controllers/devops-messages.controllers';

@Module({
  controllers: [DevopsMessagesControllers],
  imports: [ConfigModule.forRoot(), ApplicationModule],
  providers: [],
})
export class BotModule {}
