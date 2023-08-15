// import { IsNotEmpty, IsOptional, IsString } from '../../../node_modules/class-validators';

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTradeDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  index: string;

  @IsNumber()
  @IsNotEmpty()
  stickerPrice: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  average: number;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}