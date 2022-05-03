import { PullRequestResource } from '@psartech/models';
import { AbstractDevopsMessageEvent } from './common/abstract-devops-message-event';

export class PullRequestCreatedEvent extends AbstractDevopsMessageEvent<PullRequestResource> {}
