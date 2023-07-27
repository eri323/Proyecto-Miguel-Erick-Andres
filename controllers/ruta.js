import Ruta from "../models/ruta.js"

const httpRuta = {
    getRuta: async (req, res) => {
        try {
            const ruta = await Ruta.find()
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    getRutaId: async (req, res) => {
        const {id} = req.params
        try {
            const ruta = await Ruta.findById(id)
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    postRuta: async (req, res) => {
        try {
            const {sucursal, Origen, Destino, fecha_salida}= req.body 
            const ruta = new Ruta({ sucursal, Origen, Destino, fecha_salida })
            ruta.save()
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },

   
    putRuta: async (req, res) => {
        try {
            const {id}= req.params
            const { sucursal, Origen, Destino, fecha_salida } = req.body
            const ruta = await Ruta.findByIdAndUpdate(id, { sucursal, Origen, Destino, fecha_salida },{new:true})
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteRuta: async (req, res) => {
        try {
            const{id}= req.params
            const ruta = await Ruta.findByIdAndDelete(id)
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putRutainac: async (req, res) => {
        try {
            const { id } = req.params
            const ruta = await Ruta.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ ruta })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putRutaact: async (req, res) => {
        try {
            const { id } = req.params
            const ruta = await Ruta.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ ruta })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpRuta