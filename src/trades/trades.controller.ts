import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';
import { CreateTradeDto } from './dto/create.trades.dto';
import { DeleteTradeDto } from './dto/delete.trades.dto';
import { UpdateTradeDto } from './dto/update.trades.dto';
import { TradesService } from './trades.service';

@UseGuards(AuthGuard('jwt'))
@Controller('trades')
export class TradesController {
    constructor(private tradeService: TradesService){}

    @Get()
    getTrades(@User() userId: number) {
        return this.tradeService.getTrades(userId);
    }

    @Post('create')
    createTrade(@User() userId: any, @Body() dto: CreateTradeDto) {
        return this.tradeService.createTrade(userId, dto);
    }

    @Post('edit')
    updateTrade(@User() userId: any, @Body() dto: UpdateTradeDto) {
        return this.tradeService.updateTrade(userId, dto);
    }

    @Delete('delete')
    deleteTrade(@User() userId: any, @Body() dto: DeleteTradeDto) {
        return this.tradeService.deleteTrade(userId, dto);
    }
}
