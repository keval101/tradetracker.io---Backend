import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsOptional()
    firstName: string

    @IsString()
    @IsOptional()
    lastName: string

    @IsString()
    @IsOptional()
    hash: string

    @IsNumber()
    @IsOptional()
    balance: number

    @IsNumber()
    @IsOptional()
    profit: number

    @IsNumber()
    @IsOptional()
    loss: number

}