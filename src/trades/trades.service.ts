import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTradeDto } from './dto/create.trades.dto';
import { DeleteTradeDto } from './dto/delete.trades.dto';
import { UpdateTradeDto } from './dto/update.trades.dto';

@Injectable()
export class TradesService {
    constructor(private readonly prisma: PrismaService) {}

    getTrades(userId: number) {
        const data = this.prisma.trade.findMany({
            where: {
                userId: userId
            }
        })
        return data;
    }

    createTrade(userId: number, dto: CreateTradeDto) {
        const data = this.prisma.trade.create({
            data: {
                userId: userId,
                ...dto
            }
        })
        return data;
    }

    updateTrade(userId: number, dto: UpdateTradeDto) {
        const data = this.prisma.trade.update({
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

    deleteTrade(user: any, dto: DeleteTradeDto) {
        const data = this.prisma.trade.delete({
            where: {
                id: dto.id
            }
        })
        return data;
    }
}
