import mongoose from "mongoose";



const Valor = new mongoose.Schema({
    precio: { type: Number, required: true },
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Valor", Valor)