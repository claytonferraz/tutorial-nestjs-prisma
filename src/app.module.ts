import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [CategoriasModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
