import { ClientOptions } from 'discord.js';
import { ModuleMetadata, Type } from '@nestjs/common';

export interface DiscordOptionsFactory {
  createDiscordOptions(): Promise<DiscordModuleOptions> | DiscordModuleOptions;
}

export interface DiscordModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<DiscordOptionsFactory>;
  useClass?: Type<DiscordOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<DiscordModuleOptions> | DiscordModuleOptions;
  inject?: any[];
}

export interface IDiscordModuleOptions {
  token: string;
  clientOptions: ClientOptions;
}

export class DiscordModuleOptions implements IDiscordModuleOptions {
  clientOptions: ClientOptions;
  token: string;
}
