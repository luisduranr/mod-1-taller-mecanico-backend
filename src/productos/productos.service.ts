import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {
    const { categoriaId, ...productoData } = createProductoDto;
    try {
      return this.prisma.producto.create({
        data: {
          ...productoData,
          categoria: { connect: { id: categoriaId } }
        },
        include: { categoria: true }
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
    return this.prisma.producto.findMany({
      include: { categoria: true }
    });
  }

  async findOne(id: number) {

    const productoEncontrado= await this.prisma.producto.findUnique({
      where: { id },
      include: { categoria: true }
    })
    if (!productoEncontrado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return productoEncontrado;

  }


  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const { categoriaId, ...productoData } = updateProductoDto;

    const data: any = { ...productoData };

    if (categoriaId !== undefined) {
      data.categoria = { connect: { id: categoriaId } };
    }

    return this.prisma.producto.update({
      where: { id },
      data,
      include: { categoria: true }
    });
  }


  async remove(id: number) {
    const productoEncontrado=  this.prisma.producto.delete({
      where: { id }
    });
    if (!productoEncontrado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return productoEncontrado;
  }
  async findByCategoria(categoriaId: number) {
    return this.prisma.producto.findMany({
      where: { categoriaId },
      include: { categoria: true }
    });
  }
}
