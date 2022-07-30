import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCreatedEvent } from '../pull-request-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(PullRequestCreatedEvent)
export class PullRequestCreatedEventHandler
  implements IEventHandler<PullRequestCreatedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger
  ) {}

  async handle(event: PullRequestCreatedEvent): Promise<void> {
    this.logger.log('Pull request created');
  }
}
