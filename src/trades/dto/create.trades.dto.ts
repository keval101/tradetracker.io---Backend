// import { IsNotEmpty, IsOptional, IsString } from '../../../node_modules/class-validators';

import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTradeDto {

  @IsNotEmpty()
  date: Date

  @IsNumber()
  @IsNotEmpty()
  trades: number;

  @IsNumber()
  @IsNotEmpty()
  invested: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  isProfitable: boolean;

  @IsNumber()
  profit: number;

  @IsNumber()
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