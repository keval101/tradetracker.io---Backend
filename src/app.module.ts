import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GainersLosersModule } from './gainers-losers/gainers-losers.module';
import { PrismaModule } from './prisma/prisma.module';
import { GainersModule } from './gainers/gainers.module';

@Module({
  imports: [
    HttpModule,
    GainersLosersModule,
    PrismaModule,
    GainersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
