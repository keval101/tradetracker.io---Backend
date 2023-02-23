import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLosersDto } from './dto/losers.create.dto';
import { UpdateLosersDto } from './dto/losers.update.dto';
import { LosersService } from './losers.service';

@Controller('losers')
export class LosersController {

    constructor(private losersService: LosersService) {}

    @Get('nse')
    getNSE() {
        return this.losersService.getData();
    }

    @Get()
    getGainers() {
        return this.losersService.getLosers();
    }

    @Post('create')
    addLosers(@Body() dto: CreateLosersDto) {
        return this.losersService.addLosers(dto);
    }

    @Post('update')
    updateLoserrs(@Body() dto: UpdateLosersDto) {
        return this.losersService.updateLosers(dto);
    }
}
