// volumenes/dto/update-volumen.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateVolumenDto } from './create-volumen.dto';

export class UpdateVolumenDto extends PartialType(CreateVolumenDto) {}
