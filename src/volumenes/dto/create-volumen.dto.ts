// volumenes/dto/create-volumen.dto.ts
import { IsNumber, IsBoolean, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateVolumenDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id_volumen: number;

  @IsBoolean()
  @IsOptional()
  readonly deteriorado?: boolean;

  @IsString()
  @IsNotEmpty()
  readonly libro: string; // ID del libro

  @IsNumber()
  @IsOptional()
  readonly unidadesDisponibles?: number;
}
