import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './../decorators/user.decorator';
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

    @Patch('update')
    updateTrade(@User() userId: any, @Body() dto: UpdateTradeDto) {
        return this.tradeService.updateTrade(userId, dto);
    }

    @Delete('delete/:id')
    deleteTrade(@User() userId: any, @Param('id') id: string) {
        return this.tradeService.deleteTrade(userId, id);
    }

    @Post('filter/:type')
    filterTrade(@User() userId: any, @Param('type') type: string) {
        return this.tradeService.filterTrade(userId, type == 'profit' ? true : false);
    }
}
