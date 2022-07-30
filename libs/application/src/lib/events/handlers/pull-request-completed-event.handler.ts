import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { Logger } from '@nestjs/common';
import { PullRequestCompletedEvent } from '../pull-request-completed.event';

@EventsHandler(PullRequestCompletedEvent)
export class PullRequestCompletedEventHandler
  implements IEventHandler<PullRequestCompletedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger
  ) {}

  async handle(event: PullRequestCompletedEvent): Promise<void> {
    this.logger.log('Pull request completed');
  }
}
