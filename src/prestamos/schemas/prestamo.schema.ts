// prestamos/schemas/prestamo.schema.ts
import { Schema } from 'mongoose';

export const PrestamoSchema = new Schema({
  id_prestamo: { type: Number, required: true },
  fecha_prestamo: { type: Date, default: Date.now },
  fecha_real: Date,
  volumen: { type: Schema.Types.ObjectId, ref: 'Volumen', required: true },
  persona: { type: Schema.Types.ObjectId, ref: 'Persona', required: true },
  activo: { type: Boolean, default: true },
});
