import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [CategoriasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
