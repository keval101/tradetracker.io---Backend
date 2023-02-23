import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: "mysql://root:ZMnjSyUpHPWojHfcH0V9@containers-us-west-189.railway.app:7098/railway",
        },
      },
    });
  }
}
