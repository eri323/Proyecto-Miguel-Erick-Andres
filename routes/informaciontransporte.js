import { Router } from "express"
import {check} from "express-validator"
import httpTransporte from "../controllers/informaciontransporte.js"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/transbusca', [], httpTransporte.getTransporte)

router.get('/transbuscaid/:id', [], httpTransporte.getTransporteId)

router.post('/transcrear', [
    check("Vehiculo", "Identifique el vehiculo").not().isEmpty(),
    check("NumAsientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("horario", "Especifique el horario de buses").not().isEmpty(),
    validarCampos
], httpTransporte.postTransporte)

router.put('/transmodificar/:id', [
    check("Vehiculo", "Identifique el vehiculo").not().isEmpty(),
    check("NumAsientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("horario", "Especifique el horario de buses").not().isEmpty(),
    validarCampos
], httpTransporte.putTransporte)

router.delete('/transelimina/:id', httpTransporte.deleteTransporte)

router.put('/transporteinac/:id', httpTransporte.putTransporteinac)

router.put('/transporteact/:id', httpTransporte.putTransporteact)
export default router