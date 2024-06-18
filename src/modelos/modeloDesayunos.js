import { Schema, model } from "mongoose";

const esquemaDesayunos= new Schema (
    {
        nombre: { type: String, required: true },
        color: { type: String, required: true },
        talla: { type: String, required: true },
        disponible: { type: Boolean, required: true },
        existencias: { type: Number, required: true },
        imagen: { data: Buffer, contentType: String },
    },
    {versionKey: false, timestamps: true}
);

export default model ('Desayunos', esquemaDesayunos);