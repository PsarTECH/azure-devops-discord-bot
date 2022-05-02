import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetHeroesQuery {}

@QueryHandler(GetHeroesQuery)
export class GetHeroesQueryHandler
  implements IQueryHandler<GetHeroesQuery, { name: string }>
{
  execute(query: GetHeroesQuery): Promise<{ name: string }> {
    return Promise.resolve({ name: 'John doe' });
  }
}
