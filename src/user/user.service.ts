import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';


@UseGuards(AuthGuard('jwt'))
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUserDetail(userId: number) {
         const data = await this.prisma.user.findFirst({
            where: {
                id: userId
            },
        })
        delete data.hash
        return data;
    }

     async updateUserDetail(userId: number, user: UserDto) {
        const data = await this.prisma.user.update({
            where: {
                email: user?.email,
            },
            data: {
                balance: user?.balance,
                profit: user?.profit,
                loss: user?.loss,
                firstName: user?.firstName,
                lastName: user?.lastName,
            }
        })
        delete data?.hash
        return data;
    }

}
