import { Module } from '@nestjs/common';
import { GainersLosersController } from './gainers-losers.controller';
import { GainersLosersService } from './gainers-losers.service';

@Module({
  controllers: [GainersLosersController],
  providers: [GainersLosersService],
})
export class GainersLosersModule {}
