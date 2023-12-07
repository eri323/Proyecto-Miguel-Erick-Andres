import mongoose from "mongoose";


const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: Number, require: true },
/*     tipo_venta: { type: String, require: true }, */
    fecha_venta: { type: Date, require: true, default: Date.now },
    /* Num_pasajes: { type: Number, require: true }, */
    // Total_pasajes: { type: Number, require: true },
    Vendedor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor', require: true },
    Cliente_id: { type: mongoose.Schema.Types.ObjectId, ref:'InformacionCliente', require:true},
    Ruta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ruta', require: true },
    // conductor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor', require: true },
    // Asiento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'asiento', require: true },
    Transporte_id: { type: mongoose.Schema.Types.ObjectId, ref: 'InformacionTransporte', require: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }    
})

export default mongoose.model("InformacionPasaje", InformacionPasaje)





