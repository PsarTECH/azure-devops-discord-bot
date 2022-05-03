import { DevopsMessage, EventType } from '@psartech/models';
import {
  PullRequestCompletedEvent,
  PullRequestCreatedEvent,
  PullRequestUpdatedEvent,
} from '@psartech/application';
import { IEvent } from '@nestjs/cqrs';

const eventMappings = new Map<
  EventType,
  new (message: DevopsMessage) => IEvent
>();

eventMappings
  .set(EventType.PullRequestCreated, PullRequestCreatedEvent)
  .set(EventType.PullRequestUpdated, PullRequestUpdatedEvent)
  .set(EventType.PullRequestMergeCommitCreated, PullRequestCompletedEvent);

export { eventMappings };
