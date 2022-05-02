import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestUpdatedEvent } from '../pull-request-updated.event';

@EventsHandler(PullRequestUpdatedEvent)
export class PullRequestUpdatedEventHandler
  implements IEventHandler<PullRequestUpdatedEvent>
{
  constructor(private readonly discordService: DiscordService) {}

  handle(event: PullRequestUpdatedEvent): any {
    console.log(event);
  }
}
