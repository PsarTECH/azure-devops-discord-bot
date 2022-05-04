import { DevopsMessage, EventType } from '@psartech/models';
import { IEvent } from '@nestjs/cqrs';
import { PullRequestCreatedEvent } from './pull-request-created.event';
import { PullRequestUpdatedEvent } from './pull-request-updated.event';
import { PullRequestCompletedEvent } from './pull-request-completed.event';

const eventMappings = new Map<
  EventType,
  new (message: DevopsMessage) => IEvent
>();

eventMappings
  .set(EventType.PullRequestCreated, PullRequestCreatedEvent)
  .set(EventType.PullRequestUpdated, PullRequestUpdatedEvent)
  .set(EventType.PullRequestMergeCommitCreated, PullRequestCompletedEvent);

export { eventMappings };
