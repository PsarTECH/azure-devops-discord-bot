import { Logger, Module } from '@nestjs/common';
import { InfrastructureModule } from '@psartech/infrastructure';
import { ApplicationConfigModule } from './config/application-config.module';
import { CqrsModule } from '@nestjs/cqrs';
import { PullRequestCreatedEventHandler } from './events/handlers/pull-request-created-event.handler';
import { PullRequestUpdatedEventHandler } from './events/handlers/pull-request-updated-event.handler';
import { PullRequestCompletedEventHandler } from './events/handlers/pull-request-completed-event.handler';

@Module({
  controllers: [],
  imports: [ApplicationConfigModule, InfrastructureModule, CqrsModule],
  providers: [
    Logger,
    PullRequestCreatedEventHandler,
    PullRequestUpdatedEventHandler,
    PullRequestCompletedEventHandler,
  ],
  exports: [CqrsModule, ApplicationConfigModule],
})
export class ApplicationModule {}
