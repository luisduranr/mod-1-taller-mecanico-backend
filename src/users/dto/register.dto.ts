// src/auth/dtos/register.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  firstName?: string;
  lastName?: string;
}

