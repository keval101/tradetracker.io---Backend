import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGainersDto } from './dto/create.gainers.dto';
import { UpdateGainersDto } from './dto/update.gainers.dto';
import { GainersService } from './gainers.service';

@Controller('gainers')
export class GainersController {
    constructor(private readonly gainerService: GainersService) {}

    @Get()
    getGainers() {
        return this.gainerService.getGainer();
    }

    @Post('create')
    addGainers(@Body() dto: CreateGainersDto) {
        return this.gainerService.addGainers(dto);
    }

    @Post('update')
    updateGainers(@Body() dto: UpdateGainersDto) {
        return this.gainerService.updateGainers(dto);
    }
}
