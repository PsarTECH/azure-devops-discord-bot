import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCompletedEvent } from '../pull-request-completed.event';

@EventsHandler(PullRequestCompletedEvent)
export class PullRequestCompletedEventHandler
  implements IEventHandler<PullRequestCompletedEvent>
{
  constructor(private readonly discordService: DiscordService) {}

  handle(event: PullRequestCompletedEvent): any {
    console.log(event);
  }
}
