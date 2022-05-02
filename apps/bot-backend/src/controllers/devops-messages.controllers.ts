import { Controller } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Controller('devops/messages')
export class DevopsMessagesControllers {
  constructor(private readonly eventBus: EventBus) {}
}
