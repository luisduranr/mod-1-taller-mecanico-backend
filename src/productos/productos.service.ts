import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductosService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {

    try {
      return await this.prismaService.producto.create({
        data: createProductoDto
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // p2002 registro repetido
        if (error.code === 'P2002') {
          throw new ConflictException(`Producto con id ${createProductoDto.nombre} ya existe`);
        }
      }
    }
  }

  findAll() {
    return this.prismaService.producto.findMany();
  }

  async findOne(id: number) {
    const productoEncontrado= await this.prismaService.producto.findUnique({
      where: { id }
    });
    if (!productoEncontrado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return productoEncontrado;

  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const productoActualizado= await this.prismaService.producto.update({
      where: { id },
      data: updateProductoDto
    });
    if (!productoActualizado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    return productoActualizado;
  }

  async remove(id: number) {
    const productoEncontrado= await this.prismaService.producto.delete({
      where: { id }
    });
    if (!productoEncontrado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return productoEncontrado;
  }
}
