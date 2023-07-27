import { Router } from "express"
import httpinformacioncliente from "../controllers/informacioncliente.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/hola', httpinformacioncliente.getCliente)

router.get('/hola2', httpinformacioncliente.getClienteid)

router.post('/guardar', [
    check("CC_cliente", "Por favor digite numero de cedula").not().isEmpty(),
    check("password", "Por favor digite contraseña").not().isEmpty(),
    check("Nombre_cliente", "Por favor digite nombre").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono valido").isLength(10),
    validarCampos
], httpinformacioncliente.postCliente)

export default router