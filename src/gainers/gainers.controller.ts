import { Body, Controller, Get, Post } from '@nestjs/common';
import { GainersDto } from './dto/gainers.dto';
import { UpdateGainersDto } from './dto/gainers.update.dto';
import { GainersService } from './gainers.service';

@Controller('gainers')
export class GainersController {
    constructor(private readonly gainerService: GainersService) {}

    @Post('create')
    addGainers(@Body() dto: GainersDto) {
        return this.gainerService.addGainers(dto);
    }

    @Post('update')
    updateGainers(@Body() dto: UpdateGainersDto) {
        return this.gainerService.updateGainers(dto);
    }
}
