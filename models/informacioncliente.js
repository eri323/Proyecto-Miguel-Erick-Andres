import mongoose from "mongoose";

const InformacionClienteSchema = new mongoose.Schema({
    CC_cliente: { type: String, require: true, unique: true},
    Nombre_cliente: { type: String, require: true },
    Telefono_cliente: { type: String, require: true, length: 10 },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("InformacionCliente",InformacionClienteSchema)