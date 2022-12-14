import { Injectable, Logger } from '@nestjs/common';
import * as Discord from 'discord.js';
import { DiscordModuleOptions } from '../types';

@Injectable()
export class DiscordService extends Discord.Client {
  constructor(discordModuleOptions: DiscordModuleOptions, logger: Logger) {
    super(discordModuleOptions.clientOptions);

    this.login(discordModuleOptions.token)
      .then(() => {
        logger.log(
          'Discord bot client successfully logged in',
          DiscordService.name
        );
      })
      .catch((err) => {
        logger.error(err.message, DiscordService.name);
      });
  }
}
