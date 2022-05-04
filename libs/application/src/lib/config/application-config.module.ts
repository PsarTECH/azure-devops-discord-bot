import { Logger, Module } from '@nestjs/common';
import { DiscordConfigModule } from './discord-config/discord-config.module';

@Module({
  imports: [Logger, DiscordConfigModule],
  exports: [Logger, DiscordConfigModule],
})
export class ApplicationConfigModule {}
