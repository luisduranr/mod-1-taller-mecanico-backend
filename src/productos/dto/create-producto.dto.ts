// export class CreateProductoDto {}

import { Producto } from "@prisma/client";

export type CreateProductoDto = Omit<Producto, 'id'| 'createdAt' | 'updatedAt'>;