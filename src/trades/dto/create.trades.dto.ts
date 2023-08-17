// import { IsNotEmpty, IsOptional, IsString } from '../../../node_modules/class-validators';

import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTradeDto {

  @IsNotEmpty()
  date: Date

  @IsNumber()
  @IsNotEmpty()
  trades: number;

  @IsNumber()
  @IsNotEmpty()
  invested: number;

  @IsBoolean()
  @IsNotEmpty()
  isProfitable: boolean;

  @IsNumber()
  @IsOptional()
  profit: number;

  @IsNumber()
  @IsOptional()
  loss: number;

  @IsNumber()
  @IsNotEmpty()
  brokerage: number;

  @IsNumber()
  @IsNotEmpty()
  after_brokerage: number;

  @IsNumber()
  @IsNotEmpty()
  remainingCapital: number;
}