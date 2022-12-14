import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PullRequest } from './pull-request.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([PullRequest])],
  exports: [TypeOrmModule],
})
export class DomainModule {}
