import Tiquete from "../models/informacionpasaje.js";
import Ruta from "../models/ruta.js";
import Vendedor from "../models/vendedor.js";
import Cliente from "../models/informacioncliente.js";


const helpersTiquete = {
  validarAsiento: async (num_asiento, req) => {
    const ruta = req.req.body.ruta;

    console.log("r", ruta);

    const buscar = await Tiquete.findOne({ ruta }).populate({
      path: "ruta",
      populate: { path: "bus" },
    });

    console.log("b", buscar);

    console.log(num_asiento);

    if (buscar) {
      const num_asiento_buscar = buscar.num_asiento;
      const asiento_bus = buscar.ruta.bus.asiento;
      if (num_asiento_buscar === num_asiento)
        throw new Error(`Asiento ${num_asiento} ya está ocupado`);
      if (asiento_bus < num_asiento || num_asiento < 0)
        throw new Error(`Asiento erróneo`);
    }
  },

  rutaActiva: async (id) => {
    const ruta = await Ruta.findOne({ _id: id });

    console.log(ruta);
    if (ruta.estado === 0) {
      throw new Error("La ruta esta inactiva.");
    }
  },
  vendedorActivo: async (id) => {
    const vendedor = await Vendedor.findOne({ _id: id });

    console.log(vendedor);
    if (vendedor.estado === 0) {
      throw new Error("El vendedor esta inactivo.");
    }
  },
  clienteActivo: async (id) => {
    const cliente = await Cliente.findOne({ _id: id });

    console.log(cliente);
    if (cliente.estado === 0) {
      throw new Error("El cliente esta inactivo.");
    }
  },
};

export default helpersTiquete;
