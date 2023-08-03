import InformacionCliente from "../models/informacioncliente.js"



const httpinformacioncliente = {
    getCliente: async (req, res) => {
        try {
            const cliente = await InformacionCliente.find()
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getClienteid: async (req, res) => {
        const {id} = req.params
        try {
            const cliente = await InformacionCliente.findById(id)
            res.json({cliente})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postCliente: async (req, res) => {
        try {
            const { CC_cliente, Nombre_cliente, Telefono_cliente } = req.body
            const cliente = new InformacionCliente({ CC_cliente,  Nombre_cliente, Telefono_cliente })
            cliente.save()

            res.json({
                cliente
            })
        }
        catch (error) {
            res.status(400).json({ error })
        }
    },

    deleteCliente: async (req, res) => {
        try {
            const { id } = req.params
            const cliente = await InformacionCliente.findByIdAndDelete(id)
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    putCliente: async (req, res) => {
        try {
            const { id } = req.params
            const { CC_cliente, Nombre_cliente, Telefono_cliente } = req.body
            const cliente = await InformacionCliente.findByIdAndUpdate(id, { CC_cliente, Nombre_cliente, Telefono_cliente }, { new: true })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putClienteinac: async (req, res) => {
        try {
            const { id } = req.params
            const cliente = await InformacionCliente.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putClienteact: async (req, res) => {
        try {
            const { id } = req.params
            const cliente = await InformacionCliente.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpinformacioncliente