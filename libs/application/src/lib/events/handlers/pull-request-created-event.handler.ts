import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCreatedEvent } from '../pull-request-created.event';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PullRequest } from '@psartech/domain';
import { Repository } from 'typeorm';

@EventsHandler(PullRequestCreatedEvent)
export class PullRequestCreatedEventHandler
  implements IEventHandler<PullRequestCreatedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger,
    @InjectRepository(PullRequest)
    private readonly pullRequestRepository: Repository<PullRequest>
  ) {}

  async handle(event: PullRequestCreatedEvent): Promise<void> {
    this.logger.log('Pull request created');
  }
}
