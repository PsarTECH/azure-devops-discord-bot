import { AbstractPullRequestEvent } from './abstract-pull-request.event';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

export class PullRequestCompletedEvent extends AbstractPullRequestEvent {}

@EventsHandler(PullRequestCompletedEvent)
export class PullRequestCompletedEventHandler
  implements IEventHandler<PullRequestCompletedEvent>
{
  handle(event: PullRequestCompletedEvent): any {
    console.log('pr completed');
  }
}
