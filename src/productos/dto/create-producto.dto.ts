import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  descripcion: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  precio: number;

  @ApiProperty()
  @IsString()
  imagen: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  categoriaId: number;
}