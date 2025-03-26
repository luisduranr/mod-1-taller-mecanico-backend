// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductoDto } from './create-producto.dto';

import { CreateProductoDto } from "./create-producto.dto";
type UpdateProductoDto = Partial<CreateProductoDto>;
export { UpdateProductoDto };