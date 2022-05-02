import { DevopsMessage } from '@psartech/models';

export class PullRequestCompletedEvent {
  public constructor(public readonly devOpsMessage: DevopsMessage) {}
}
