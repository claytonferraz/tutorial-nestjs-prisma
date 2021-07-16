import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaDto } from './create-categoria.dto';
import { IsString } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @IsString()
  id: string;
}
