import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NseController } from './nse.controller';
import { NseService } from './nse.service';

@Module({
  imports: [HttpModule],
  controllers: [NseController],
  providers: [NseService]
})
export class NseModule {}
