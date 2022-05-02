export abstract class AbstractPullRequestEvent {
  public constructor(public readonly devOpsMessage: any) {}
}
