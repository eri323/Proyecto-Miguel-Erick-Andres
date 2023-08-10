import mongoose from "mongoose";


const Ruta = new mongoose.Schema({
    sucursal: { type: String, required: true },
    Origen: { type: String, required: true },
    Destino: { type: String, required: true },
    fecha_salida: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    Transporte_id: { type: mongoose.Schema.Types.ObjectId, ref: 'InformacionTransporte',required: true },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Ruta", Ruta)

