import Valor from "../models/valor.js"

const httpValor = {
    getValor: async (req, res)=>{
        try {
            const valor = await Valor.find()
            res.json({valor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getValorId: async (req, res)=>{
        const {id}=req.params 
        try {
            const valor = await Valor.findById(id)
            res.json({valor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postValor: async (req, res)=>{
        try {
            const {precio, total}= req.body
            const valor = new Valor({ precio, total })
            valor.save()
            res.json({valor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putValor: async (req, res)=>{
        try {
            const {id}= req.params
            const { precio, total }= req.body
            const valor = await Valor.findByIdAndUpdate(id, { precio, total },{new:true})
            res.json({valor})
        } catch (error) {
            res.status(400).json({ error })
        }
    }, 
    deleteValor: async (req, res)=>{
        try {
            const {id}=req.params
            const valor = await Valor.findByIdAndDelete(id)
            res.json({valor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putValorinac: async (req, res) => {
        try {
            const { id } = req.params
            const valor = await Valor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ valor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putValoract: async (req, res) => {
        try {
            const { id } = req.params
            const valor = await Valor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ valor })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpValor