import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GainersModule } from './gainers/gainers.module';
import { LosersModule } from './losers/losers.module';
import { TradesController } from './trades/trades.controller';
import { TradesService } from './trades/trades.service';
import { TradesModule } from './trades/trades.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NseModule } from './nse/nse.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    PrismaModule,
    GainersModule,
    LosersModule,
    TradesModule,
    AuthModule,
    NseModule,
    UserModule,
  ],
  controllers: [AppController, TradesController],
  providers: [AppService, TradesService],
})
export class AppModule {}
