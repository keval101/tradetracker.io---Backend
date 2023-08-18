import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';


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

}
