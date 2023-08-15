// import { IsNotEmpty, IsOptional, IsString } from '../../../node_modules/class-validators';

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DeleteTradeDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}