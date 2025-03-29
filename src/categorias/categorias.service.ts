import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CategoriaCreateInput) {
    return this.prisma.categoria.create({ data });
  }

  async findAll() {
    return this.prisma.categoria.findMany();
  }

  async findOne(where: Prisma.CategoriaWhereUniqueInput) {
    return this.prisma.categoria.findUnique({
      where,
      include: { productos: true }
    });
  }

  async update(params: {
    where: { id: number };
    data: Prisma.CategoriaUpdateInput | UpdateCategoriaDto;
  }) {
    const { where, data } = params;
    return this.prisma.categoria.update({
      where,
      data: {
        ...data,
        updatedAt: new Date() // Actualiza la fecha de modificación automáticamente
      }
    });
  }

  async remove(where: Prisma.CategoriaWhereUniqueInput) {
    return this.prisma.categoria.delete({ where });
  }
}