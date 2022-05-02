import { ApiProperty } from '@nestjs/swagger';

export class Project {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  state?: string;
}

export class Repository {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  project?: Project;
  @ApiProperty()
  defaultBranch?: string;
  @ApiProperty()
  remoteUrl?: string;
}

export class CreatedBy {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  displayName?: string;
  @ApiProperty()
  uniqueName?: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  imageUrl?: string;
}

export class Commit {
  @ApiProperty()
  commitId?: string;
  @ApiProperty()
  url?: string;
}

export class Reviewers {
  @ApiProperty()
  reviewerUrl?: string;
  @ApiProperty()
  vote?: number;
  @ApiProperty()
  id?: string;
  @ApiProperty()
  displayName?: string;
  @ApiProperty()
  uniqueName?: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  imageUrl?: string;
  @ApiProperty()
  isContainer?: boolean;
}

export class PullRequestResource {
  @ApiProperty()
  repository?: Repository;
  @ApiProperty()
  pullRequestId?: number;
  @ApiProperty()
  status?: string;
  @ApiProperty()
  createdBy?: CreatedBy;
  @ApiProperty()
  creationDate?: string;
  @ApiProperty()
  closedDate?: string;
  @ApiProperty()
  title?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  sourceRefName?: string;
  @ApiProperty()
  targetRefName?: string;
  @ApiProperty()
  mergeStatus?: string;
  @ApiProperty()
  mergeId?: string;
  @ApiProperty()
  lastMergeSourceCommit?: Commit;
  @ApiProperty()
  lastMergeTargetCommit?: Commit;
  @ApiProperty()
  lastMergeCommit?: Commit;
  @ApiProperty()
  reviewers?: Reviewers[];
  @ApiProperty()
  commits?: Commit[];
  @ApiProperty()
  url?: string;
}
