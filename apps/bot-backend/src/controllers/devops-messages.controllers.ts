import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { DevopsMessage, EventType } from '@psartech/models';
import { ApiBody, ApiNoContentResponse } from '@nestjs/swagger';
import { eventMappings } from '../../../../libs/application/src/lib/events/event-mappings';

@Controller('devops/messages')
export class DevopsMessagesControllers {
  constructor(private readonly eventBus: EventBus) {}

  @Post()
  @ApiBody({ type: DevopsMessage })
  @ApiNoContentResponse()
  listen(@Body() message: DevopsMessage): void {
    const event = eventMappings.get(message.eventType as EventType);
    if (!event) throw new BadRequestException('Unhandled event id');
    this.eventBus.publish(new (event.bind(null, message))());
  }
}
