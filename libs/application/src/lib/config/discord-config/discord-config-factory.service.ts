import { Injectable } from '@nestjs/common';
import { DiscordModuleOptions, DiscordOptionsFactory } from '@psartech/discord';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DiscordConfigFactoryService implements DiscordOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createDiscordOptions(): Promise<DiscordModuleOptions> | DiscordModuleOptions {
    return {
      token: this.configService.get<string>('DISCORD_BOT_TOKEN'),
      clientOptions: {
        intents: [
          'Guilds',
          'GuildMembers',
          'GuildBans',
          'GuildEmojisAndStickers',
          'GuildIntegrations',
          'GuildWebhooks',
          'GuildInvites',
          'GuildVoiceStates',
          'GuildPresences',
          'GuildMessages',
          'GuildMessageReactions',
          'GuildMessageTyping',
          'DirectMessages',
          'DirectMessageReactions',
          'DirectMessageTyping',
          'GuildScheduledEvents',
        ],
      },
    };
  }
}
