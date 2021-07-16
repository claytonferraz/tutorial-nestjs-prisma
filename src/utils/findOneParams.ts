import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class FindOneParams {
  @IsString()
  @Transform(({ value }) => String(value))
  id: string;
}
