import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity('pull_request')
export class PullRequest {
  @PrimaryColumn({ type: 'integer' })
  pullRequestId: number;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  discordMessageId: string;
}
