import { Router } from "express"
import {check} from "express-validator"
import httpTransporte from "../controllers/informaciontransporte.js"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/trab', [], httpTransporte.getTransporte)

router.post('/tra', [
    check("Vehiculo", "Identifique el vehiculo").not().isEmpty(),
    check("NumAsientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("horario", "Especifique el horario de buses").not().isEmpty(),
    validarCampos
], httpTransporte.postTransporte)

export default router