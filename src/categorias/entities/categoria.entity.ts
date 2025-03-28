import { Producto } from "../../productos/entities/producto.entity";

export class Categoria {
  id: number;
  nombre: string;
  descripcion?: string;
  productos?: Producto[];
  createdAt: Date;
  updatedAt: Date;
}