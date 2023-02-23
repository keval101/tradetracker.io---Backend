import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';
import { TradesService } from './trades.service';

@UseGuards(AuthGuard('jwt'))
@Controller('trades')
export class TradesController {
    constructor(private tradeService: TradesService){}

    @Get()
    getTrades(@Body() userId: number) {
        return this.tradeService.getTrades(userId);
    }

    @Post('create')
    createTrade(@User() user: any, @Body() dto: any) {
        return this.tradeService.createTrade(user, dto);
    }

    @Post('edit')
    updateTrade(@User() user: any, @Body() dto: any) {
        return this.tradeService.updateTrade(user, dto);
    }
}
