import Vendedor from "../models/vendedor.js"

const HelperVendedor = {
    existevendedorid: async (id, req) => {
        const existe = await Vendedor.findById(id)
        if (!existe) {
            throw new Error(`El id del vendedor no existe ${id}`)
        }
        req.req.VendedorUpdate = existe
    }
}
export default HelperVendedor
