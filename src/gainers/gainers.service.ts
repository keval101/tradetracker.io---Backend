import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateGainersDto } from './dto/create.gainers.dto';
import { UpdateGainersDto } from './dto/update.gainers.dto';

@Injectable()
export class GainersService {

    constructor(private readonly prisma: PrismaService) {}

    async getGainer() {
        const data = await this.prisma.gainers.findMany()
        return data;
    }

    async addGainers(input: CreateGainersDto) {
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
