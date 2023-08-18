import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/decorators/user.decorator';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUserDetail(@User() userId: number) {
        return this.userService.getUserDetail(userId);
    }
}
