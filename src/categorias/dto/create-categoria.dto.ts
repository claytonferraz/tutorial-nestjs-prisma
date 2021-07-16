import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  descricao: string;
}
