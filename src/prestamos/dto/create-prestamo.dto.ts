// prestamos/dto/create-prestamo.dto.ts
import { IsNumber, IsDateString, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id_prestamo: number;

  @IsDateString()
  @IsOptional()
  readonly fecha_prestamo?: string;

  @IsDateString()
  @IsOptional()
  readonly fecha_real?: string;

  @IsString()
  @IsNotEmpty()
  readonly volumen: string; // ID del volumen

  @IsString()
  @IsNotEmpty()
  readonly persona: string; // ID de la persona
}
