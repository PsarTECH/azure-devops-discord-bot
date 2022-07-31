import { Module } from '@nestjs/common';
import { InfrastructureConfigModule } from './config/infrastructure-config.module';

@Module({
  imports: [InfrastructureConfigModule],
  exports: [],
})
export class InfrastructureModule {}
