import mongoose from "mongoose";



const asiento = new mongoose.Schema({
    codigo_asientos: { type: String, require: true, unique: true},
    asientos_comprados: { type: Number, require: true },
    createdAt: { type: Date, default:Date.now },
    estado:{type: Number, default:1 }
    
})

export default mongoose.model("asiento", asiento)