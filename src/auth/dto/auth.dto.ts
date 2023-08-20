import { IsString, IsEmail, IsNotEmpty, IsEmpty, IsOptional, IsNumber, isNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
  
  @IsNumber()
  @IsOptional()
  balance: number;

}
