import { EventType } from './event-type.enum';
import { PullRequestResource } from './pull-request.resource';
import { ApiProperty } from '@nestjs/swagger';

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

export class Project {
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

export class DevopsMessage {
  @ApiProperty()
  id?: string;
  @ApiProperty()
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
  resource?: PullRequestResource;
  @ApiProperty()
  resourceVersion?: string;
  @ApiProperty()
  resourceContainers?: ResourceContainers;
  @ApiProperty()
  createdDate?: string | Date;
}
