import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GainersDto } from './dto/gainers.dto';
import { UpdateGainersDto } from './dto/gainers.update.dto';

@Injectable()
export class GainersService {

    constructor(private readonly prisma: PrismaService) {}

    async addGainers(input: GainersDto) {
        const data = await this.prisma.gainers.create({
            data: {
                symbol: input.symbol,
                previousPrice: input.previousPrice,
                ltp: input.ltp,
                netPrice: input.netPrice,
              }
            })
        return data;
    }

    async updateGainers(input: UpdateGainersDto) {
        const data = await this.prisma.gainers.update({
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
}
