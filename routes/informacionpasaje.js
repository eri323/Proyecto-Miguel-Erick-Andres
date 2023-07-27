import { Router } from "express"
import httpinfoPasaje from "../controllers/informacionpasaje.js"
import {check} from "express-validator"


const router = new Router()

router.get('/hola',[], httpinfoPasaje.getPasaje)

router.post('/pas', [
    check("Nmro_ticket", "Numero de tickete ausente").not().isEmpty(),
    check("tipo_venta", "Especifique el tipo de venta").not().isEmpty(),
    check("Num_pasajes", "Especifique numero de pasajes").not().isEmpty(),
    check("Total_pasajes", "Especifique total de pasajes").not().isEmpty(),
], httpinfoPasaje.postPasaje)

export default router