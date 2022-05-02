import { EventType } from './event-type.enum';
import { PullRequestResource } from './pull-request.resource';
import { ApiProperty } from '@nestjs/swagger';
import { Project } from './project';

export class Message {
  @ApiProperty()
  text?: string;
  @ApiProperty()
  html?: string;
  @ApiProperty()
  markdown?: string;
}

export class Collection {
  @ApiProperty()
  id?: string;
}

export class Account {
  @ApiProperty()
  id?: string;
}

export class ResourceContainers {
  @ApiProperty()
  collection?: Collection;
  @ApiProperty()
  account?: Account;
  @ApiProperty()
  project?: Project;
}

type Resource = PullRequestResource | any;

export class DevopsMessage<T = Resource> {
  @ApiProperty()
  id?: string;
  @ApiProperty({ type: 'string' })
  eventType?: EventType | string;
  @ApiProperty()
  publisherId?: string;
  @ApiProperty()
  scope?: string;
  @ApiProperty()
  message?: Message;
  @ApiProperty()
  detailedMessage?: Message;
  @ApiProperty()
  resource?: T;
  @ApiProperty()
  resourceVersion?: string;
  @ApiProperty()
  resourceContainers?: ResourceContainers;
  @ApiProperty()
  createdDate?: string | Date;
}
