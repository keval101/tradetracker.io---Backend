import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLosersDto } from './dto/losers.create.dto';
import { UpdateLosersDto } from './dto/losers.update.dto';

@Injectable()
export class LosersService {

    constructor(private readonly prisma: PrismaService) {}

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
}
