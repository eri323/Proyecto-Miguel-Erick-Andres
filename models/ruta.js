import mongoose from "mongoose";


const Ruta = new mongoose.Schema({
    codigo: {type: Number, require:true},
    Origen: { type: String, require: true },
    Destino: { type: String, require: true },
    hora_salida: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Ruta", Ruta)

