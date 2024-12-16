// personas/dto/create-persona.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty()
  readonly dni: string;

  @IsString()
  @IsNotEmpty()
  readonly cod_socio: string;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsOptional()
  readonly apellidos?: string;

  @IsString()
  @IsOptional()
  readonly direccion?: string;

  @IsString()
  @IsOptional()
  readonly telefono?: string;
}
