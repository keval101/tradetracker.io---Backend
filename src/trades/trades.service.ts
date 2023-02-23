import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

    createTrade(user: any, dto: any) {
        const data = this.prisma.trade.create({
            data: {
                userId: user.id,
                ...dto
            }
        })
        return data;
    }

    updateTrade(user: any, dto: any) {
        const value = {
            type: dto.type,
            index: dto.index,
            stickerPrice: dto.stickerPrice,
            quantity: dto.quantity,
            average: dto.average,
            totalAmount: dto.totalAmount
        }
        const data = this.prisma.trade.update({
            where: {
                id: dto.id
            },
            data: {
                userId: user.id,
                ...value
            }
        })
        return data;
    }
}
