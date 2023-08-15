import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NseService {
    
    constructor(private httpService: HttpService){};
    
    async getMarketStatus() {
        const url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json';
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
     }
}
