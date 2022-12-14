import { DynamicModule, Logger, Module, Provider } from '@nestjs/common';
import { DiscordService } from './discord/discord.service';
import {
  DiscordModuleAsyncOptions,
  DiscordModuleOptions,
  DiscordOptionsFactory,
} from './types';

@Module({})
export class DiscordModule {
  public static registerAsync(
    options: DiscordModuleAsyncOptions
  ): DynamicModule {
    return {
      module: DiscordModule,
      imports: options.imports || [],
      providers: [
        ...this.createAsyncProviders(options),
        DiscordService,
        Logger,
      ],
      exports: [DiscordModuleOptions, DiscordService],
    };
  }

  private static createAsyncProviders(
    options: DiscordModuleAsyncOptions
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: DiscordModuleAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        provide: DiscordModuleOptions,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: DiscordModuleOptions,
      useFactory: async (optionsFactory: DiscordOptionsFactory) =>
        await optionsFactory.createDiscordOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
