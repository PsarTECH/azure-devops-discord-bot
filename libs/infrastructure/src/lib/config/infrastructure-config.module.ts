import { Module } from '@nestjs/common';
import { TypeormConfigModule } from './typeorm-config/typeorm-config.module';

@Module({
  imports: [TypeormConfigModule],
  exports: [TypeormConfigModule],
})
export class InfrastructureConfigModule {}
