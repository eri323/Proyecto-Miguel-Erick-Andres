import mongoose from "mongoose";

const Vendedor = new mongoose.Schema({
    Nombre: { type: String, require: true },
    Cedula:{ type: Number, require: true},
    password: { type: String, require: true, unique: true },
    Telefono: { type: Number, require: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Vendedor", Vendedor)