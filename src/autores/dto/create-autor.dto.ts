// autores/dto/create-autor.dto.ts
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateAutorDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id_autor: number;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}
