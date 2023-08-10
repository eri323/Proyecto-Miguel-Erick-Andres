import { Router } from "express"
import httpruta from "../controllers/ruta.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/rutabusca', httpruta.getRuta)

router.get('/rutabuscaid/:id', httpruta.getRutaId)

router.get('/rutabuscafechas',[
    check("fechaInicio", "Digite fechaInico").not().isEmpty(),
    check("fechaFin", "Digite fechaFin").not().isEmpty()
], httpruta.getRutasPorFecha)

router.delete('/rutaelimina/:id', httpruta.deleteRuta)

router.post('/rutacrear', [
    check("sucursal", "Sucursal no identificada").not().isEmpty(),
    check("Origen", "Origen no identificada").not().isEmpty(),
    check("Destino", "Destino no identificada").not().isEmpty(),
    check("fecha_salida", "Fecha-salida no identificada").not().isEmpty(),
    check("Transporte_id", "Digite el id del transporte").isMongoId(),
    validarCampos
], httpruta.postRuta)


router.put('/rutamodificar/:id', [
    check("sucursal", "Sucursal no identificada").not().isEmpty(),
    check("Origen", "Origen no identificada").not().isEmpty(),
    check("Destino", "Destino no identificada").not().isEmpty(),
    check("fecha_salida", "Fecha-salida no identificada").not().isEmpty(),
    validarCampos
], httpruta.putRuta)

router.put('/rutainac/:id', httpruta.putRutainac)

router.put('/rutaact/:id', httpruta.putRutaact)

export default router