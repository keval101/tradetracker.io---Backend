import { Controller, Get } from '@nestjs/common';
import { GainersLosersService } from './gainers-losers.service';

@Controller('gainers-losers')
export class GainersLosersController {
  constructor(private readonly service: GainersLosersService) {}
  @Get()
  getGainersLosers() {
    this.service.getGainersLosers();
  }
}
