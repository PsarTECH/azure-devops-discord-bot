import { DevopsMessage, PullRequestResource } from '@psartech/models';

export class PullRequestCreatedEvent {
  public constructor(
    public readonly devOpsMessage: DevopsMessage<PullRequestResource>
  ) {}
}
