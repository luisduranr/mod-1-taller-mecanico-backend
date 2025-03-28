import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

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
    where: Prisma.CategoriaWhereUniqueInput;
    data: Prisma.CategoriaUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.categoria.update({ where, data });
  }

  async remove(where: Prisma.CategoriaWhereUniqueInput) {
    return this.prisma.categoria.delete({ where });
  }
}