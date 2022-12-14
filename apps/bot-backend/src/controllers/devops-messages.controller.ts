import {
  BadRequestException,
  Body,
  Controller,
  Logger,
  Post,
} from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { DevopsMessage, EventType } from '@psartech/models';
import { ApiBody, ApiNoContentResponse } from '@nestjs/swagger';
import { eventMappings } from '@psartech/application';

@Controller('devops/messages')
export class DevopsMessagesController {
  constructor(
    private readonly eventBus: EventBus,
    private readonly logger: Logger
  ) {}

  @Post()
  @ApiBody({ type: DevopsMessage })
  @ApiNoContentResponse()
  listen(@Body() message: DevopsMessage): void {
    const event = eventMappings.get(message.eventType as EventType);
    if (!event) {
      this.logger.warn(`"${message.eventType}" is not a know event type`);
      throw new BadRequestException();
    }
    this.eventBus.publish(new (event.bind(null, message))());
  }
}
