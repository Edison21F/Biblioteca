// autores/dto/update-autor.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {}
