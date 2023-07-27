import mongoose from "mongoose";
import InformacionCliente from "../models/informacioncliente.js"

const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: String, required: true },
    tipo_venta: { type: String, required: true },
    fecha_venta: { type: Date, required: true, default: Date.now },
    Num_pasajes: { type: Number, required: true },
    Total_pasajes: { type: Number, required: true },
    informacioncliente: { type: mongoose.Schema.Types.ObjectId, ref:'InformacionCliente', required:true},
    ruta: { type: mongoose.Schema.Types.ObjectId, ref: 'ruta', required: true },
    valor: { type: mongoose.Schema.Types.ObjectId, ref: 'valor', required: true },
    vendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendedor', required: true },
    asiento:{ type:mongoose.Schema.Types.ObjectId, ref:'asiento', required:true},
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model(" InformacionPasaje", InformacionPasaje)





