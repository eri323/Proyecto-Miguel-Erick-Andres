import mongoose from "mongoose";

const Vendedor = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Cedula:{ type: Number, required: true},
    password: { type: String, required: true, unique: true },
    Telefono: { type: Number, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Vendedor", Vendedor)