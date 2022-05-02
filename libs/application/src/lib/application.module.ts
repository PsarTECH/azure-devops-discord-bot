import { Module, OnModuleInit } from '@nestjs/common';
import { InfrastructureModule } from '@psartech/infrastructure';
import { ApplicationConfigModule } from './config/application-config.module';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import {
  GetHeroesQuery,
  GetHeroesQueryHandler,
} from './queries/get-heroes.query';

@Module({
  controllers: [],
  imports: [ApplicationConfigModule, InfrastructureModule, CqrsModule],
  providers: [GetHeroesQueryHandler],
  exports: [CqrsModule, GetHeroesQueryHandler],
})
export class ApplicationModule implements OnModuleInit {
  constructor(private readonly queryBus: QueryBus) {}

  async getHero() {
    const hero = await this.queryBus.execute(new GetHeroesQuery());
    console.log(hero);
  }

  onModuleInit(): any {
    this.getHero().catch(console.log);
  }
}
