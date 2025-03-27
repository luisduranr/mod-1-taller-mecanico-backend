import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
  @IsNotEmpty({ message: 'El email no puede estar vacío' })
  @ApiProperty({
    example: 'usuario@ejemplo.com',
    description: 'Email del usuario',
  })
  email: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
  @ApiProperty({
    example: 'password123',
    description: 'Contraseña del usuario',
  })
  password: string;
}