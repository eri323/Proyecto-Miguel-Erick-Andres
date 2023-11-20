import InformacionTransporte from "../models/informaciontransporte.js"
const httpTransporte= {
    getTransporte: async (req,res)=>{
        try {

            const transporte = await InformacionTransporte.find().populate("conductor_id")
            res.json({transporte})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getTransporteId: async (req, res)=>{
        const {id}= req.params
        try {
            const transporte = await InformacionTransporte.findById(id)
            res.json({transporte})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postTransporte: async (req, res)=>{
        try {
            const {Vehiculo, NumAsientos, conductor_id, NumBus, Soat}= req.body 
            const transporte = new InformacionTransporte({ Vehiculo, NumAsientos, conductor_id, NumBus, Soat})
            await transporte.save()
            res.json({transporte})
        } catch (error) {
            res.status(400).json({ error })
        }
    },





    putTransporte: async (req, res)=>{
        try {
            const {id} = req.params
            const { Vehiculo, NumAsientos, conductor_id, NumBus, Soat }= req.body
            const transporte = await InformacionTransporte.findByIdAndUpdate(id, { Vehiculo, NumAsientos, conductor_id, NumBus, Soat },{new:true})
            res.json([transporte])
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteTransporte: async (req, res) =>{
        try {
            const {id}= req.params
            const transporte = await InformacionTransporte.findByIdAndDelete(id)
            res.json({transporte})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putTransporteinac: async (req, res) => {
        try {
            const { id } = req.params
            const  transporte = await InformacionTransporte.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ transporte })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putTransporteact: async (req, res) => {
        try {
            const { id } = req.params
            const transporte = await InformacionTransporte.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ transporte })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpTransporte