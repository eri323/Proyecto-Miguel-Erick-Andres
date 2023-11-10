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


    getRutasPorFecha: async (req, res) => {
        try {
            const { fechaInicio, fechaFin } = req.query;

            if (!fechaInicio || !fechaFin) {
                return res.status(400).json({ error: 'Debes proporcionar fechas de inicio y fin.' });
            }

            const ruta = await Ruta.find({
                fecha_salida: {
                    $gte: new Date(fechaInicio),
                    $lte: new Date(fechaFin),
                },
            }).populate("Transporte_id")
              

            res.json({ ruta });
        } catch (error) {
            res.status(400).json({ error })
            res.status(500).json({ error: 'Error al obtener las rutas.' });
        }
    },
    
    postRuta: async (req, res) => {
        try {
            const { Origen, Destino, hora_salida}= req.body 
            const ruta = new Ruta({  Origen, Destino, hora_salida })
            ruta.save()
            res.json({ruta})
        } catch (error) {
            res.status(400).json({ error })
        }
    },

   
    putRuta: async (req, res) => {
        try {
            const {id}= req.params
            const {  Origen, Destino, hora_salida } = req.body
            const ruta = await Ruta.findByIdAndUpdate(id, {  Origen, Destino, hora_salida },{new:true})
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