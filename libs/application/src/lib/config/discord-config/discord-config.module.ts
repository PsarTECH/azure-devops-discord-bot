import { Module } from '@nestjs/common';
import { DiscordModule } from '@psartech/discord';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DiscordConfigFactoryService } from './discord-config-factory.service';

@Module({
  imports: [
    DiscordModule.registerAsync({
      imports: [ConfigModule],
      useClass: DiscordConfigFactoryService,
      inject: [ConfigService],
    }),
  ],
  exports: [DiscordModule],
})
export class DiscordConfigModule {}
