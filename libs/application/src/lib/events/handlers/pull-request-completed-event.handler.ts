import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCompletedEvent } from '../pull-request-completed.event';
import { Logger } from '@nestjs/common';

@EventsHandler(PullRequestCompletedEvent)
export class PullRequestCompletedEventHandler
  implements IEventHandler<PullRequestCompletedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger
  ) {}

  handle(event: PullRequestCompletedEvent): any {
    this.logger.log('Pull request completed');
  }
}
