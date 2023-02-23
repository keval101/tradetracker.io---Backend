import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLosersDto } from './dto/losers.create.dto';
import { UpdateLosersDto } from './dto/losers.update.dto';

@Injectable()
export class LosersService {

    constructor(private readonly prisma: PrismaService, private readonly httpService: HttpService) {}

    async getLosers() {
        const data = await this.prisma.losers.findMany()
        return data;
    }

    async addLosers(input: CreateLosersDto) {
        const data = await this.prisma.losers.create({
            data: {
                symbol: input.symbol,
                previousPrice: input.previousPrice,
                ltp: input.ltp,
                netPrice: input.netPrice,
              }
            })
        return data;
    }

    async updateLosers(input: UpdateLosersDto) {
        const data = await this.prisma.losers.update({
            where: {
                id: input.id
            },
            data: {
                symbol: input.symbol,
                previousPrice: input.previousPrice,
                ltp: input.ltp,
                netPrice: input.netPrice,
              }
            })
        return data;
    }

    async getData() {
        const url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json';
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
     }
}
