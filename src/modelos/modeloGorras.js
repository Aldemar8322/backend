import { Schema, model } from 'mongoose';

const esquemaGorra = new Schema(
  {
    nombre: { type: String, required: true },
    color: { type: String, required: true },
    talla: { type: String, required: true },
    disponible: { type: Boolean, required: true },
    existencias: { type: Number, required: true },
    imagen: { type: String, required: true }
  },
  { versionKey: false, timestamps: true }
);

export default model('Gorra', esquemaGorra);