import { Module } from '@nestjs/common';
import { LosersController } from './losers.controller';
import { LosersService } from './losers.service';

@Module({
  controllers: [LosersController],
  providers: [LosersService],
})
export class LosersModule {}
