// prestamos/interfaces/prestamo.interface.ts
import { Document } from 'mongoose';
import { Volumen } from '../../volumenes/interfaces/volumen.interface';
import { Persona } from '../../personas/interfaces/persona.interface';

export interface Prestamo extends Document {
  readonly id_prestamo: number;
  readonly fecha_prestamo: Date;
  readonly fecha_real?: Date;
  readonly volumen: Volumen | string; // Puede ser el objeto Volumen o su ID
  readonly persona: Persona | string; // Puede ser el objeto Persona o su ID
  readonly activo: boolean;
}
