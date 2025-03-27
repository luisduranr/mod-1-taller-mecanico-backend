import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {
  @IsEmail()
  @ApiProperty({
    example: 'usuario@ejemplo.com',
    description: 'Email del usuario',
  })
  email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({
    example: 'password123',
    description: 'Contraseña del usuario (mínimo 6 caracteres)',
    minLength: 6,
  })
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Juan Pérez',
    description: 'Nombre del usuario (opcional)',
    required: false,
  })
  name?: string;
}