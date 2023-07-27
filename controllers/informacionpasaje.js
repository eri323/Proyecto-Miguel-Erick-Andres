import InformacionPasaje from "../models/informacionpasaje.js"
const httpinfopasaje = {
    getPasaje: async (req, res) => {
        try {
            const pasaje = await InformacionPasaje.find()
            res.json({ pasaje })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getPasajeId: async (req, res) => {
        const {id} = req.params
        try {
            const pasaje = await InformacionPasaje.find({ id})
            res.json({ pasaje })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postPasaje: async (req, res) => {
        try {
            const { Nmro_ticket, tipo_venta, fecha_venta, Num_pasajes, Total_pasajes }= req.body
            const pasaje = new InformacionPasaje({ Nmro_ticket, tipo_venta, fecha_venta, Num_pasajes, Total_pasajes })
            await pasaje.save()
            res.json({pasaje})
        } catch (error) {
            res.status(400).json({ error })
            
        }
    },
    putPasaje: async (req, res)=>{
        try {
            const {id}= req.params
            const { Nmro_ticket, tipo_venta, fecha_venta, Num_pasajes, Total_pasajes } = req.body
            const pasaje = await InformacionPasaje.findByIdAndUpdate(id, { Nmro_ticket, tipo_venta, fecha_venta, Num_pasajes, Total_pasajes },{new:true})
            res.json({pasaje})
        } catch (error) {
            res.status(400).json({ error })
        }
    }, 
    deletePasaje: async (req, res)=> {
        try {
            const {id}= req.params
            const pasaje = await InformacionPasaje.findByIdAndDelete({id})
            res.json({pasaje})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putPasajeinac: async (req, res) => {
        try {
            const { id } = req.params
            const pasaje = await InformacionPasaje.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ pasaje })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putPasajeact: async (req, res) => {
        try {
            const { id } = req.params
            const pasaje = await InformacionPasaje.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ pasaje })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpinfopasaje