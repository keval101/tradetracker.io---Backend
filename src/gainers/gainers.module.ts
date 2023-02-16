import { Module } from '@nestjs/common';
import { GainersController } from './gainers.controller';
import { GainersService } from './gainers.service';

@Module({
  controllers: [GainersController],
  providers: [GainersService]
})
export class GainersModule {}
