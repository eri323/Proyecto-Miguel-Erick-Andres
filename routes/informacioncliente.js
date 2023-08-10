import { Router } from "express"
import httpinformacioncliente from "../controllers/informacioncliente.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"

const router = new Router()

router.get('/clientebusca', httpinformacioncliente.getCliente)

router.get('/clientebuscaid/:id', httpinformacioncliente.getClienteid)

router.post('/clientecrear', [
    check("CC_cliente", "Por favor digite numero de cedula").not().isEmpty(),
    check("Nombre_cliente", "Por favor digite nombre").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono valido").isLength(10),
    validarCampos
], httpinformacioncliente.postCliente)

router.delete('/clienteelimina/:id',/* [
    check("id", "Digite id").not().isEmpty(),
    check("id", "Digite id").isMongoId()
], */ httpinformacioncliente.deleteCliente)

router.put('/clientemodificar/:id', [
    check("CC_cliente", "Por favor digite numero de cedula").not().isEmpty(),
    check("Nombre_cliente", "Por favor digite nombre").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono valido").isLength(10),
    validarCampos
], httpinformacioncliente.putCliente)

router.put('/clienteinac/:id', httpinformacioncliente.putClienteinac)

router.put('/clienteact/:id', httpinformacioncliente.putClienteact)
export default router