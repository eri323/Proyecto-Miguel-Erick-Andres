import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"
import HelperVendedor from "../helpers/helpervendedor.js"

const router = new Router()

router.get('/vendedorbusca',  httpVendedor.getVendedor)

router.post('/vendedorcrear', [
    check("Nombre", "Vendedor no identificado").not().isEmpty(),
    check("password", "Digite su password").not().isEmpty(),
    validarCampos
], httpVendedor.postVendedor)

router.get('/vendedorbuscaid/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(HelperVendedor.existevendedorid),
    validarCampos
], httpVendedor.getVendedorId)

router.delete('/vendedorelimina/:id', httpVendedor.deleteVendedor)

router.put('/vendedormodifica/:id',[
    check("Nombre", "Vendedor no identificado").not().isEmpty(),
    check("password", "Digite su password").not().isEmpty(),
    validarCampos
], httpVendedor.putVendedor)


router.post('/login', httpVendedor.login)
export default router