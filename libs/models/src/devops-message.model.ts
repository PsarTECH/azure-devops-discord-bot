import { EventType } from './event-type.enum';
import { PullRequestResource } from './pull-request.resource';

export interface Message {
  text: string;
  html: string;
  markdown: string;
}

export interface DetailedMessage {
  text: string;
  html: string;
  markdown: string;
}

export interface Collection {
  id: string;
}

export interface Account {
  id: string;
}

export interface Project {
  id: string;
}

export interface ResourceContainers {
  collection: Collection;
  account: Account;
  project: Project;
}

export interface DevopsMessage {
  id: string;
  eventType: EventType;
  publisherId: string;
  scope: string;
  message: Message;
  detailedMessage: DetailedMessage;
  resource: PullRequestResource;
  resourceVersion: string;
  resourceContainers: ResourceContainers;
  createdDate: string | Date;
}
