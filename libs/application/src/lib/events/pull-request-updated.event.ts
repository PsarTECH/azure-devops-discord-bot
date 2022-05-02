import { DevopsMessage } from '@psartech/models';

export class PullRequestUpdatedEvent {
  public constructor(public readonly devOpsMessage: DevopsMessage) {}
}
