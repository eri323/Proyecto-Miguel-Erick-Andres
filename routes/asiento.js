import { Router } from "express"
import httpAsiento from "../controllers/asiento.js"
import { check } from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"


const router = new Router()

router.get('/asientobusca', httpAsiento.getAsiento)

router.get('/asientobuscaid/:id', httpAsiento.getAsientoId)

router.post('/asientocrear', [
    check("codigo_asientos", "Ausencia de id asiento").not().isEmpty(),
    check("asientos_comprados", "NaN").not().isEmpty(),
    validarCampos
], httpAsiento.postAsiento)

router.delete('/asientoelimina/:id', httpAsiento.deleteAsiento)

router.put('/asientomodificar/:id', [
    check("codigo_asientos", "Ausencia de id asiento").not().isEmpty(),
    check("asientos_comprados", "NaN").not().isEmpty(),
    validarCampos
], httpAsiento.putAsiento)

router.put('/asientoinac/:id', httpAsiento.putAsientoinac)

router.put('/asientoact/:id', httpAsiento.putAsientoact)
export default router