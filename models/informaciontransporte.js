import mongoose from "mongoose";

const InformacionTransporte = new mongoose.Schema({
    NumBus: { type: Number, required: true },
    Vehiculo: { type: String, required: true },
    NumAsientos: { type: Number, required: true },
    conductor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor', required: true },
    Soat: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("InformacionTransporte", InformacionTransporte)