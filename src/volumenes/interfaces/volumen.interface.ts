// volumenes/interfaces/volumen.interface.ts
import { Document } from 'mongoose';
import { Libro } from '../../libros/interfaces/libro.interface';

export interface Volumen extends Document {
  readonly id_volumen: number;
  readonly deteriorado: boolean;
  readonly libro: Libro | string; // Puede ser el objeto Libro o su ID
  readonly unidadesDisponibles: number;
  readonly activo: boolean;
}
