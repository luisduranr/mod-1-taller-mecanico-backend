import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @ApiProperty({ required: false })
  nombre?: string;

  @ApiProperty({ required: false })
  descripcion?: string;

  // Añade aquí otros campos actualizables
}