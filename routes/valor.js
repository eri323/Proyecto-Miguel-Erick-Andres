import { Router } from "express"
import httpValor from "../controllers/valor.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/valorbusca', httpValor.getValor)

router.post('/valorcrear', [
    check("precio", "precio no especificado ").not().isEmpty(),
    check("total", "total no especificado").not().isEmpty(),
    validarCampos
], httpValor.postValor)

router.get('/valorbuscaid/:id',httpValor.getValorId )

router.delete('/valorelimina/:id', httpValor.deleteValor)

router.put('/valormodificar/:id',[
    check("precio", "precio no especificado ").not().isEmpty(),
    check("total", "total no especificado").not().isEmpty(),
    validarCampos
], httpValor.putValor)

router.put('/valorinac/:id', httpValor.putValorinac)

router.put('/valoract/:id', httpValor.putValoract)

export default router