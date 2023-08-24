import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './../decorators/user.decorator';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUserDetail(@User() userId: number) {
        return this.userService.getUserDetail(userId);
    }

    @Patch('update')
    updateUserDetail(@User() userId: number, @Body() dto: UserDto) {
        return this.userService.updateUserDetail(userId, dto);
    }
}
