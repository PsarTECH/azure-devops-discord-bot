import { Injectable, Logger } from '@nestjs/common';
import * as Discord from 'discord.js';
import { DiscordModuleOptions } from '../types';

@Injectable()
export class DiscordService extends Discord.Client {
  constructor(
    private readonly discordModuleOptions: DiscordModuleOptions,
    private readonly logger: Logger
  ) {
    super(discordModuleOptions.clientOptions);

    this.login(discordModuleOptions.token)
      .then(() => {
        this.logger.log(
          'Discord bot client successfully logged in',
          DiscordService.name
        );
      })
      .catch(() => {
        this.logger.error(
          'An error occurred while authenticating the discord client',
          DiscordService.name
        );
      });
  }
}
