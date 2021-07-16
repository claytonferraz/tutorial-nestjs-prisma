import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoriasService } from '../categorias/categorias.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, CategoriasService],
  exports: [PrismaService],
})
export class PrismaModule {}
