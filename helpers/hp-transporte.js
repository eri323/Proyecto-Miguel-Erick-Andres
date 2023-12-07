import Bus from "../models/informaciontransporte.js"
import Conductor from '../models/conductor.js'
import { isValid, isBefore } from 'date-fns';

const helpersBus = {
    comprobarCantAsientos: async (asiento)=>{
        
        if(asiento>30){
            throw new Error("El número de asientos debe ser igual o inferior a 30")
        }

    },

    existePlaca: async (Vehiculo)=>{
        const existe = await Bus.findOne({Vehiculo})

        if(existe){
            throw new Error("La placa ya esta registrada en la base de datos.")
        }
    },

    conductorActivo: async(id)=>{
        const conductor = await Conductor.findOne({_id: id})

        console.log(conductor);
        if(conductor.estado===0){
         throw new Error('El conductor esta inactivo.')
        }
    },
    validarFechaSoat: (Soat) => {
        // Convertir la fecha de string a objeto Date
        const fechaSoat = new Date(Soat);
    
        // Verificar si la fecha es válida y es anterior o igual a la fecha actual
        if (!isValid(fechaSoat) || isBefore(fechaSoat, new Date())) {
          throw new Error('La fecha de vencimiento del SOAT debe ser válida y posterior a hoy.');
        }
      },
}

export default helpersBus