import { Module } from '@nestjs/common';
import { DiscordConfigModule } from './discord-config/discord-config.module';

@Module({
  imports: [DiscordConfigModule],
  exports: [DiscordConfigModule],
})
export class ApplicationConfigModule {}
