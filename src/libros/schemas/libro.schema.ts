// libros/schemas/libro.schema.ts
import { Schema } from 'mongoose';

export const LibroSchema = new Schema({
  isbn: { type: String, required: true },
  editorial: String,
  año_escritura: Number,
  titulo: { type: String, required: true },
  autor: { type: Schema.Types.ObjectId, ref: 'Autor', required: true },
  activo: { type: Boolean, default: true },
});
