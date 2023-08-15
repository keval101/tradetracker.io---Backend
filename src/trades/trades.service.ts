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

    createTrade(userId: any, dto: CreateTradeDto) {
        const data = this.prisma.trade.create({
            data: {
                userId: userId,
                ...dto
            }
        })
        return data;
    }

    updateTrade(userId: any, dto: UpdateTradeDto) {
        const data = this.prisma.trade.update({
            where: {
                id: dto.id
            },
            data: {
                userId: userId,
                type: dto.type,
                index: dto.index,
                stickerPrice: dto.stickerPrice,
                quantity: dto.quantity,
                average: dto.average,
                totalAmount: dto.totalAmount
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
