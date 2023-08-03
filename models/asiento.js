import mongoose from "mongoose";



const asiento = new mongoose.Schema({
    codigo_asientos: { type: String, required: true, unique: true},
    asientos_comprados: { type: Number, required: true },
    createdAt: { type: Date, default:Date.now },
    estado:{type: Number, default:1 }
    
})

export default mongoose.model("asiento", asiento)