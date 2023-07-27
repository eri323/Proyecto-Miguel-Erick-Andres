import { Router } from "express"
import httpruta from "../controllers/ruta.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/rutabuscar', httpruta.getRuta)

router.get('/rutabuscarid/:id', httpruta.getRutaId)

router.delete('/rutaeliminaid/:id', httpruta.deleteRuta)

router.post('/rutacrear', [
    check("sucursal", "Sucursal no identificada").not().isEmpty(),
    check("Origen", "Origen no identificada").not().isEmpty(),
    check("Destino", "Destino no identificada").not().isEmpty(),
    check("fecha_salida", "Fecha-salida no identificada").not().isEmpty(),
    validarCampos
], httpruta.postRuta)

export default router