import { ApiProperty } from '@nestjs/swagger';

export class Project {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  state: string;

  constructor({ id, name, url, state }: Project) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.state = state;
  }
}
