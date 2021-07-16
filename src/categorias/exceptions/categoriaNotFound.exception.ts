import { NotFoundException } from '@nestjs/common';

export class CategoriaNotFoundException extends NotFoundException {
  constructor(categoriaId: string) {
    super(`Categoria with id ${categoriaId} not found`);
  }
}
