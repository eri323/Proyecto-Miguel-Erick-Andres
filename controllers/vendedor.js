import Vendedor from "../models/vendedor.js"
import { generarJWT } from "../middelwares/validar-jwt.js";
import bcryptjs from "bcrypt"

const httpVendedor = {
    getVendedor: async (req, res)=>{
        try {
            const vendedor = await Vendedor.find()
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getVendedorId: async (req, res)=>{
        console.log("Hl");
        const {id}= req.params
        try {
            const vendedor = await Vendedor.findById(id)
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postVendedor : async (req, res)=>{
        try {
            const {Nombre, password}= req.body
            const vendedor = new Vendedor({ Nombre, password })

            const salt = bcryptjs.genSaltSync();
            vendedor.password = bcryptjs.hashSync(password, salt)


            await vendedor.save()
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedor: async (req, res)=>{
        try {
            const {id}=req.params
            const {Nombre}= req.body
            const vendedor = await Vendedor.findByIdAndUpdate(id,{Nombre},{new:true})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteVendedor: async (req, res)=>{
        try {
            const {id}= req.params 
            const vendedor = await Vendedor.findByIdAndDelete(id)
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedorinac: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedoract: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },




    login: async (req, res) => {
        const { Nombre, password } = req.body;

        try {
            const vendedor = await Vendedor.findOne({ Nombre })
            if (!vendedor) {
                return res.status(400).json({
                    msg: "Vendedor / Password no son correctos"
                })
            }

            if (vendedor.estado === 0) {
                return res.status(400).json({
                    msg: "Vendedor Inactivo"
                })
            }

            const validPassword = bcryptjs.compareSync(password, vendedor.password);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "Vendedor / Password no son correctos"
                })
            }

            const token = await generarJWT(vendedor.id);

            res.json({
                vendedor,
                token
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Hable con el WebMaster"
            })
        }
    },

}

export default httpVendedor