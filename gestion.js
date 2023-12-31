import express from "express";
import 'dotenv/config'
import asiento from "./routes/asiento.js";
import informacioncliente from "./routes/informacioncliente.js";
import mongoose from "mongoose";
import informacionpasaje from "./routes/informacionpasaje.js";
import informaciontransporte from "./routes/informaciontransporte.js";
import ruta from "./routes/ruta.js";
import conductor from "./routes/conductor.js";
import vendedor from "./routes/vendedor.js";
import cors from "cors"

const gestion = express()

// Configurar CORS antes de definir las rutas
gestion.use(cors());

gestion.use(express.json())
gestion.use("/api/asiento", asiento)
gestion.use("/api/cliente", informacioncliente)
gestion.use("/api/pasaje", informacionpasaje)
gestion.use("/api/transporte", informaciontransporte)
gestion.use("/api/ruta", ruta)
gestion.use("/api/conductor", conductor)
gestion.use("/api/vendedor", vendedor)

gestion.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.DB)
        .then(() => console.log('Connected!'));
})
