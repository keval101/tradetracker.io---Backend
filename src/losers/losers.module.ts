import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LosersController } from './losers.controller';
import { LosersService } from './losers.service';

@Module({
  imports: [HttpModule],
  controllers: [LosersController],
  providers: [LosersService],
})
export class LosersModule {}
