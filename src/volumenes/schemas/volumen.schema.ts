// volumenes/schemas/volumen.schema.ts
import { Schema } from 'mongoose';

export const VolumenSchema = new Schema({
  id_volumen: { type: Number, required: true },
  deteriorado: { type: Boolean, default: false },
  libro: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
  unidadesDisponibles: { type: Number, default: 1 }, // Nuevo campo
  activo: { type: Boolean, default: true },
});
