import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: "sqlserver://localhost:1433;database=trade-tracker;user=sa;password=Keval@123;encrypt=true;trustServerCertificate=true;",
        },
      },
    });
  }
}
