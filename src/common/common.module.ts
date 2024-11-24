import { Module } from '@nestjs/common';
import { GetHealthStatusController } from './interface';

@Module({
  controllers: [GetHealthStatusController],
})
export class CommonModule {}
