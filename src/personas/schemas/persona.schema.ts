// personas/schemas/persona.schema.ts
import { Schema } from 'mongoose';

export const PersonaSchema = new Schema({
  dni: { type: String, required: true },
  cod_socio: { type: String, required: true },
  nombre: { type: String, required: true },
  apellidos: String,
  direccion: String,
  telefono: String,
  activo: { type: Boolean, default: true },
});
