// import { IsNotEmpty, IsOptional, IsString } from '../../../node_modules/class-validators';

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLosersDto {
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  previousPrice: number;
  
  @IsNumber()
  ltp: number;

  @IsNumber()
  netPrice: number;
}
