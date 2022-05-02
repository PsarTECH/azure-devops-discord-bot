export interface Project {
  id: string;
  name: string;
  url: string;
  state: string;
}

export interface Repository {
  id: string;
  name: string;
  url: string;
  project: Project;
  defaultBranch: string;
  remoteUrl: string;
}

export interface CreatedBy {
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
}

export interface Commit {
  commitId: string;
  url: string;
}

export interface Reviewers {
  reviewerUrl: string;
  vote: number;
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
  isContainer: boolean;
}

export interface PullRequestResource {
  repository: Repository;
  pullRequestId: number;
  status: string;
  createdBy: CreatedBy;
  creationDate: string;
  closedDate: string;
  title: string;
  description: string;
  sourceRefName: string;
  targetRefName: string;
  mergeStatus: string;
  mergeId: string;
  lastMergeSourceCommit: Commit;
  lastMergeTargetCommit: Commit;
  lastMergeCommit: Commit;
  reviewers: Reviewers[];
  commits: Commit[];
  url: string;
}
