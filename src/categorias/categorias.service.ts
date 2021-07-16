import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CategoriaNotFoundException } from './exceptions/categoriaNotFound.exception';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from '../utils/prismaError';

@Injectable()
export class CategoriasService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createCategoriaDto: CreateCategoriaDto) {
    return this.prismaService.categoria.create({
      data: createCategoriaDto,
    });
  }

  findAll() {
    return this.prismaService.categoria.findMany();
  }

  async findOne(id: string) {
    const categoria = await this.prismaService.categoria.findUnique({
      where: {
        id,
      },
    });
    if (!categoria) {
      throw new CategoriaNotFoundException(id);
    }
    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    try {
      return await this.prismaService.categoria.update({
        data: {
          ...updateCategoriaDto,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new CategoriaNotFoundException(id);
      }
      throw error;
    }
  }
  async remove(id: string) {
    try {
      return this.prismaService.categoria.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new CategoriaNotFoundException(id);
      }
      throw error;
    }
  }
}
