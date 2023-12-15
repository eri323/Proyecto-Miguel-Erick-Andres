import { Router } from "express"
import httpinfoPasaje from "../controllers/informacionpasaje.js"
import {check} from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"
import HelperPasaje from "../helpers/db-holder.js"
import helpersTiquete from "../helpers/hp-tiquete.js";



const router = new Router()

router.get('/pasajebusca',[], httpinfoPasaje.getPasaje)
router.get('/pasajebuscar',[], httpinfoPasaje.getPasaje)

router.get('/pasajebuscafechas',[
    check("fechaInicio", "Digite fechaInico").not().isEmpty(),
    check("fechaFin", "Digite fechaFin").not().isEmpty()
], httpinfoPasaje.getTicketsPorFechas)

router.get('/pasajebuscaid/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(HelperPasaje.existepasajeid),
    validarCampos
],  httpinfoPasaje.getPasajeId)
router.get(
    "/asientosOcupados/:Transporte_id/:fecha_venta/:Ruta_id",
    httpinfoPasaje.getAsientosOcupados
  );

router.get('/pasajebuscaidvendedor/:id',[], httpinfoPasaje.getTicketIdVendedor)


router.post('/pasajecrear', [
    check("Nmro_ticket", "Numero de tickete ausente").not().isEmpty(),
   /*  check("tipo_venta", "Especifique el tipo de venta").not().isEmpty(), */
    check("fecha_venta", "Especifique una fecha").not().isEmpty(),
    //check("Num_pasajes", "Especifique numero de pasajes").not().isEmpty(),
    // check("Total_pasajes", "Especifique total de pasajes").not().isEmpty(),
    check("Vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("Cliente_id", "Digite el id del cliente").isMongoId(),
    check("Ruta_id", "Digite el id de la ruta").isMongoId(),
    //check("Valor_id", "Digite el id del valor").isMongoId(),    
    // check("Asiento_id", "Digite el id del asiento").isMongoId(),
    check("Transporte_id", "Digite el id del transporte").isMongoId(),
    check("cliente").custom(helpersTiquete.clienteActivo),
    check('vendedor').custom(helpersTiquete.vendedorActivo),
    check("num_asiento", "Debe ingresar un asiento").notEmpty(),
    check("num_asiento", "Debe ingresar un asiento").custom(
      helpersTiquete.validarAsiento
    ),
    
    validarCampos
], httpinfoPasaje.postPasaje)

router.delete('/pasajeelimina/:id', httpinfoPasaje.deletePasaje)

router.put('/pasajemodificar/:id', [
    check("Nmro_ticket", "Numero de tickete ausente").not().isEmpty(),
   /*  check("tipo_venta", "Especifique el tipo de venta").not().isEmpty(), */
    check("fecha_venta", "Especifique una fecha").not().isEmpty(),
    // check("Num_pasajes", "Especifique numero de pasajes").not().isEmpty(), 
    // check("Total_pasajes", "Especifique total de pasajes").not().isEmpty(),
    check("Vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("Cliente_id", "Digite el id del cliente").isMongoId(),
    check("Ruta_id", "Digite el id de la ruta").isMongoId(),
   //  check("Valor_id", "Digite el id del valor").isMongoId(), 
    // check("Asiento_id", "Digite el id del asiento").isMongoId(),
    check("Transporte_id", "Digite el id del transporte").isMongoId(),
    validarCampos
], httpinfoPasaje.putPasaje)

router.put('/pasajeinac/:id', httpinfoPasaje.putPasajeinac)

router.put('/pasajeact/:id', httpinfoPasaje.putPasajeact)
export default router