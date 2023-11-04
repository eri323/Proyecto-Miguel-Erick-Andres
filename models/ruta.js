import mongoose from "mongoose";


const Ruta = new mongoose.Schema({
    sucursal: { type: String, required: true },
    Origen: { type: String, required: true },
    Destino: { type: String, required: true },
    fecha_salida: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Ruta", Ruta)

