import mongoose from "mongoose";

const InformacionCliente = new mongoose.Schema({
    CC_cliente: { type: String, required: true, unique: true},
    Nombre_cliente: { type: String, required: true },
    Telefono_cliente: { type: String, required: true, length: 10 },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("InformacionCliente",InformacionCliente)