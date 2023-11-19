import mongoose from "mongoose";



const Conductor = new mongoose.Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, unique:true, required: true, minlength: 7 },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("Conductor", Conductor)