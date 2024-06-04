import { Schema, Types, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        paisSede:{type: String, required: true},
        fechaInicio:{type: Date, required: true},
        campeon:{type: String, required: true},
        suramericano:{type: Boolean, required: true},
        mejorJugador:{type: String, required: true},
        goleador:{type: String, required: true},
        golesAnotados:{type: Number, required: true},
})

export default model("Usuario", esquemaUsuario);