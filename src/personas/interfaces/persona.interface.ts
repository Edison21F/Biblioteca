// personas/interfaces/persona.interface.ts
import { Document } from 'mongoose';

export interface Persona extends Document {
  readonly dni: string;
  readonly cod_socio: string;
  readonly nombre: string;
  readonly apellidos?: string;
  readonly direccion?: string;
  readonly telefono?: string;
  readonly activo: boolean;
}
