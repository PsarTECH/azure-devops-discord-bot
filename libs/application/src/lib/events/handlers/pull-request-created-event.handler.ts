import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCreatedEvent } from '../pull-request-created.event';

@EventsHandler(PullRequestCreatedEvent)
export class PullRequestCreatedEventHandler
  implements IEventHandler<PullRequestCreatedEvent>
{
  constructor(private readonly discordService: DiscordService) {}

  handle(event: PullRequestCreatedEvent): any {
    console.log(event);
  }
}
