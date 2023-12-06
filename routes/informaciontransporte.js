import { Router } from "express"
import {check} from "express-validator"
import helpersBus from "../helpers/hp-trasporte.js";
import helpersGeneral from "../helpers/hp-general.js";
import httpTransporte from "../controllers/informaciontransporte.js"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/transbusca', [], httpTransporte.getTransporte)

router.get('/transbuscaid/:id', [], httpTransporte.getTransporteId)

router.post('/transcrear', [
    check("Vehiculo", "Identifique el vehiculo").not().isEmpty(),
    check("NumAsientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("conductor_id", "Especifique el conductor_id").not().isEmpty(),
    check("NumBus", "Especifique el numero del bus").not().isEmpty(),
    check("Soat", "Especifique la fecha de vencimiento del soat").not().isEmpty(),
    check('Vehiculo').custom(helpersGeneral.verificarEspacios),
    check('NumAsientos').custom(helpersGeneral.verificarEspacios),
    check('conductor_id').custom(helpersGeneral.verificarEspacios),
    check('Soat').custom(helpersGeneral.verificarEspacios),
    check('NumBus').custom(helpersGeneral.verificarEspacios),
    check('conductor_id').custom(helpersBus.conductorActivo),
    validarCampos
], httpTransporte.postTransporte)

router.put('/transmodificar/:id', [
    check("Vehiculo", "Identifique el vehiculo").not().isEmpty(),
    check("NumAsientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("conductor_id", "Especifique el conductor_id").not().isEmpty(),
    check("NumBus", "Especifique el numero del bus").not().isEmpty(),
    check("Soat", "Especifique la fecha de vencimiento del soat").not().isEmpty(),
    check('Vehiculo').custom(helpersGeneral.verificarEspacios),
    check('NumAsientos').custom(helpersGeneral.verificarEspacios),
    check('conductor_id').custom(helpersGeneral.verificarEspacios),
    check('Soat').custom(helpersGeneral.verificarEspacios),
    check('NumBus').custom(helpersGeneral.verificarEspacios),
    check('conductor_id').custom(helpersBus.conductorActivo),
    validarCampos
], httpTransporte.putTransporte)

router.delete('/transelimina/:id', httpTransporte.deleteTransporte)

router.put('/transporteinac/:id', httpTransporte.putTransporteinac)

router.put('/transporteact/:id', httpTransporte.putTransporteact)
export default router