import { Controller, Get } from '@nestjs/common';
import { NseService } from './nse.service';

@Controller('nse')
export class NseController {
    constructor(private nseService: NseService){}
    
    @Get('live-market-status')
    getMarketStatus() {
        return this.nseService.getMarketStatus();    
    }
}
