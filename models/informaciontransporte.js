import mongoose from "mongoose";

const InformacionTransporteSchema = new mongoose.Schema({
    NumBus: { type: Number, require: true },
    Vehiculo: { type: String, require: true },
    NumAsientos: { type: Number, require: true },
    conductor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor', require: true },
    Soat: { type: Date, require: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("InformacionTransporte", InformacionTransporteSchema)