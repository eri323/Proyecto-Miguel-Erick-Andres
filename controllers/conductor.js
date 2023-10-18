import Conductor from "../models/conductor.js"

const httpConductor = {
    getConductor: async (req, res)=>{
        try {
            const conductor = await Conductor.find()
            res.json({conductor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getConductorId: async (req, res)=>{
        const {id}=req.params 
        try {
            const conductor = await Conductor.findById(id)
            res.json({conductor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postConductor: async (req, res)=>{
        try {
            const {nombre, cedula}= req.body
            const conductor = new Conductor({ nombre, cedula })
            conductor.save()
            res.json({conductor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putConductor: async (req, res)=>{
        try {
            const {id}= req.params
            const { nombre, cedula }= req.body
            const conductor = await Conductor.findByIdAndUpdate(id, { nombre, cedula },{new:true})
            res.json({conductor})
        } catch (error) {
            res.status(400).json({ error })
        }
    }, 
    deleteConductor: async (req, res)=>{
        try {
            const {id}=req.params
            const conductor = await Conductor.findByIdAndDelete(id)
            res.json({conductor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putConductorinac: async (req, res) => {
        try {
            const { id } = req.params
            const conductor = await Conductor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ conductor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putConductoract: async (req, res) => {
        try {
            const { id } = req.params
            const conductor = await Conductor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ conductor })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpConductor