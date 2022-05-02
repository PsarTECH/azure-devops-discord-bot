import { Body, Controller, Post } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { DevopsMessage, EventType } from '@psartech/models';
import {
  PullRequestCompletedEvent,
  PullRequestCreatedEvent,
  PullRequestUpdatedEvent,
} from '@psartech/application';
import { ApiBody } from '@nestjs/swagger';

@Controller('devops/messages')
export class DevopsMessagesControllers {
  constructor(private readonly eventBus: EventBus) {}

  @Post()
  @ApiBody({ type: DevopsMessage })
  listen(@Body() message: DevopsMessage) {
    switch (message.eventType) {
      case EventType.PullRequestCreated:
        return this.eventBus.publish(new PullRequestCreatedEvent(message));
      case EventType.PullRequestMergeCommitCreated:
        return this.eventBus.publish(new PullRequestCompletedEvent(message));
      case EventType.PullRequestUpdated:
        return this.eventBus.publish(new PullRequestUpdatedEvent(message));
      default:
        return null;
    }
  }
}
