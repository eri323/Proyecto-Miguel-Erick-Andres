import { Router } from "express"
import httpConductor from "../controllers/conductor.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/conductorbusca', httpConductor.getConductor)

router.post('/conductorcrear', [
    check("nombre", "nombre no especificado ").not().isEmpty(),
    check("cedula", "cedula no especificado").not().isEmpty(),
    validarCampos
], httpConductor.postConductor)

router.get('/conductorbuscaid/:id',httpConductor.getConductorId )

router.delete('/conductorelimina/:id', httpConductor.deleteConductor)

router.put('/conductormodificar/:id',[
    check("nombre", "nombre no especificado ").not().isEmpty(),
    check("cedula", "cedula no especificado").not().isEmpty(),
    validarCampos
], httpConductor.putConductor)

router.put('/conductorinac/:id', httpConductor.putConductorinac)

router.put('/conductoract/:id', httpConductor.putConductoract)

export default router