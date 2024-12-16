// libros/interfaces/libro.interface.ts
import { Document } from 'mongoose';
import { Autor } from '../../autores/interfaces/autor.interface';

export interface Libro extends Document {
  readonly isbn: string;
  readonly editorial?: string;
  readonly año_escritura?: number;
  readonly titulo: string;
  readonly autor: Autor | string; // Puede ser el objeto Autor o su ID
  readonly activo: boolean;
} 
