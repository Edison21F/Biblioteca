// autores/interfaces/autor.interface.ts
import { Document } from 'mongoose';

export interface Autor extends Document {
  readonly id_autor: number;
  readonly nombre: string;
  readonly activo: boolean;
}
