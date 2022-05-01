import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@psartech/infrastructure';
import { ApplicationConfigModule } from './config/application-config.module';

@Module({
  controllers: [],
  imports: [ApplicationConfigModule, InfrastructureModule],
  exports: [],
})
export class ApplicationModule {}
