// libros/dto/create-libro.dto.ts
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  readonly isbn: string;

  @IsString()
  readonly editorial: string;

  @IsNumber()
  readonly año_escritura: number;

  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly autor: string; // ID del autor
}
