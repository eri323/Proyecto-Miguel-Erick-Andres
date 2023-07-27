import { Router } from "express"
import httpValor from "../controllers/valor.js"
import {check} from "express-validator"

const router = new Router()

router.get('/valorb', httpValor.getValor)

router.post('/valor', [
    check("precio", "precio no especificado ").not().isEmpty(),
    check("total", "total no especificado").not().isEmpty()
], httpValor.postValor)

export default router