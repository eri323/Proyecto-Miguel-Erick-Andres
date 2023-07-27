import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js"
import {check} from "express-validator"

const router = new Router()

router.get('/vendedorb',  httpVendedor.getVendedor)

router.post('/vendedor', [
    check("Nombre", "Vendedor no identificado").not().isEmpty(),
     check("password", "Digite su password").not().isEmpty()
], httpVendedor.postVendedor)

export default router