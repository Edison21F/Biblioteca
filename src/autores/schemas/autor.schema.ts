// autores/schemas/autor.schema.ts
import { Schema } from 'mongoose';

export const AutorSchema = new Schema({
  id_autor: { type: Number, required: true },
  nombre: { type: String, required: true },
  activo: { type: Boolean, default: true }, // Borrado lógico
});
