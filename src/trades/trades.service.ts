import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service'
import { CreateTradeDto } from './dto/create.trades.dto';
import { DeleteTradeDto } from './dto/delete.trades.dto';
import { UpdateTradeDto } from './dto/update.trades.dto';
import { use } from 'passport';

@Injectable()
export class TradesService {
    constructor(private readonly prisma: PrismaService) {}

    async getTrades(userId: number) {
        const data = await this.prisma.trade.findMany({
            where: {
                userId: userId
            },
            orderBy: {date: 'desc'}
        })
        return data;
    }

    async createTrade(userId: number, dto: CreateTradeDto) {
        const data = await this.prisma.trade.create({
            data: {
                userId: userId,
                ...dto
            }
        })
        return data;
    }

    async updateTrade(userId: number, dto: UpdateTradeDto) {
        const data = await this.prisma.trade.update({
            where: {
                id: dto.id
            },
            data: {
                date: dto?.date,
                trades: dto?.trades,
                invested: dto?.invested,
                isProfitable: dto?.isProfitable,
                profit: dto?.profit,
                loss: dto?.loss,
                brokerage: dto?.brokerage,
                after_brokerage: dto?.after_brokerage,
                remainingCapital: dto?.remainingCapital
            }
        })
        return data;
    }

    async deleteTrade(userId: number, tradeId: string) {
        const data = await this.prisma.trade.delete({
            where: {
                id: +tradeId
            }
        })
        return {status: 'SUCCESS'};
    }

    async filterTrade(userId: any, isProfitable: boolean) {
        const data = await this.prisma.trade.findMany({
            where: {
                userId: userId,
                isProfitable: isProfitable
            },
            orderBy: {date: 'desc'}
        })
        return data;
    }
}
