import mongoose from "mongoose";


const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: String, required: true },
    tipo_venta: { type: String, required: true },
    fecha_venta: { type: Date, required: true, default: Date.now },
    Num_pasajes: { type: Number, required: true },
    Total_pasajes: { type: Number, required: true },
    Vendedor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor', required: true },
    Cliente_id: { type: mongoose.Schema.Types.ObjectId, ref:'InformacionCliente', required:true},
    Ruta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ruta', required: true },
    Valor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Valor', required: true },
    Asiento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'asiento', required: true },
    Transporte_id: { type: mongoose.Schema.Types.ObjectId, ref: 'InformacionTransporte', required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model("InformacionPasaje", InformacionPasaje)





