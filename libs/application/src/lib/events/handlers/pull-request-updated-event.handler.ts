import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestUpdatedEvent } from '../pull-request-updated.event';
import { Logger } from '@nestjs/common';

@EventsHandler(PullRequestUpdatedEvent)
export class PullRequestUpdatedEventHandler
  implements IEventHandler<PullRequestUpdatedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger
  ) {}

  handle(event: PullRequestUpdatedEvent): any {
    this.logger.log('Pull request updated');
  }
}
