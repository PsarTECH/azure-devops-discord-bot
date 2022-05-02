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
          'GUILDS',
          'GUILD_MEMBERS',
          'GUILD_BANS',
          'GUILD_EMOJIS_AND_STICKERS',
          'GUILD_INTEGRATIONS',
          'GUILD_WEBHOOKS',
          'GUILD_INVITES',
          'GUILD_VOICE_STATES',
          'GUILD_PRESENCES',
          'GUILD_MESSAGES',
          'GUILD_MESSAGE_REACTIONS',
          'GUILD_MESSAGE_TYPING',
          'DIRECT_MESSAGES',
          'DIRECT_MESSAGE_REACTIONS',
          'DIRECT_MESSAGE_TYPING',
          'GUILD_SCHEDULED_EVENTS',
        ],
      },
    };
  }
}
