import InformacionPasaje from "../models/informacionpasaje.js";
import vendedor from "../models/vendedor.js";
const httpinfopasaje = {
  getPasaje: async (req, res) => {
    try {
      const pasaje = await InformacionPasaje.find()
        .populate("Cliente_id")
        .populate("Transporte_id",["conductor_id"])
        .populate("Ruta_id")
        .populate("Vendedor_id");
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getPasajeId: async (req, res) => {
    const { id } = req.params;
    try {
      const pasaje = await InformacionPasaje.findById(id)
        .populate("Cliente_id")
           .populate("Transporte_id",["conductor_id"])
        .populate("Ruta_id")
        .populate("Vendedor_id")
        .res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getTicketsPorFechas: async (req, res) => {
    try {
      const { fechaInicio, fechaFin } = req.query;

      if (!fechaInicio || !fechaFin) {
        return res
          .status(400)
          .json({ error: "Debes proporcionar fechas de inicio y fin." });
      }

      const Pasaje = await InformacionPasaje.find({
        fecha_venta: {
          $gte: new Date(fechaInicio),
          $lte: new Date(fechaFin),
        },
      })
        .populate("Cliente_id")
           .populate("Transporte_id",["conductor_id"])
        
        .populate("Ruta_id")
        .populate("Vendedor_id")


      res.json({ Pasaje });
    } catch (error) {
      res.status(400).json({ error });
      res.status(500).json({ error: "Error al obtener los Pasajes." });
    }
  },
  getTicketIdVendedor: async (req, res) => {
    try {
      const vendedorId = req.params.vendedorId;

      const Pasajes = await InformacionPasaje.find({ Vendedor_id: vendedorId })
        .populate("Cliente_id")
           .populate("Transporte_id",["conductor_id"])

        .populate("Ruta_id")
        .populate("Vendedor_id")
        

      res.json({ Pasajes });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los Pasajes." });
    }
  },
  postPasaje: async (req, res) => {
    try {
      const {
        Nmro_ticket,
        /*  tipo_venta, */ fecha_venta,
        /* Num_pasajes */ Vendedor_id,
        Cliente_id,
        Ruta_id,
        Transporte_id,
      } = req.body;
      const pasaje = new InformacionPasaje({
        Nmro_ticket,
        /*  tipo_venta, */ fecha_venta,
        /* Num_pasajes */ Vendedor_id,
        Cliente_id,
        Ruta_id,
        Transporte_id,
      });
      await pasaje.save();
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putPasaje: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        Nmro_ticket,
        /*  tipo_venta, */ fecha_venta,
        /* Num_pasajes */ Vendedor_id,
        Cliente_id,
        Ruta_id,
        Transporte_id,
      } = req.body;
      const pasaje = await InformacionPasaje.findByIdAndUpdate(
        id,
        {
          Nmro_ticket,
          /*  tipo_venta, */ fecha_venta,
          /* Num_pasajes */ Vendedor_id,
          Cliente_id,
          Ruta_id,
          Transporte_id,
        },
        { new: true }
      );
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  deletePasaje: async (req, res) => {
    try {
      const { id } = req.params;
      const pasaje = await InformacionPasaje.findByIdAndDelete(id);
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putPasajeinac: async (req, res) => {
    try {
      const { id } = req.params;
      const pasaje = await InformacionPasaje.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putPasajeact: async (req, res) => {
    try {
      const { id } = req.params;
      const pasaje = await InformacionPasaje.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json({ pasaje });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  buscarRuta: async (req, res) => {
    const { codigo, bus, fecha } = req.query;
    const idRuta = await Ruta_id.findOne({ codigo });
    const idBus = await Transporte_id.findOne({ NumBus: bus });

    const f1 = new Date(fecha + "T00:00:00.000Z");
    const f2 = new Date(fecha + "T23:59:59.000Z");
    const buscar = await InformacionPasaje.find({
      $and: [
        { ruta: idRuta._id },
        { vehiculo: idBus._id },
        { fecha_salida: { $gte: f1, $lte: f2 } },
      ],
    })
      .populate("vehiculo")
      .populate("ruta")
      .populate("cliente");

    let puestos = [];

    buscar.forEach((r, i) => {
      puestos.push(r.numero_puesto);
    });

    res.json({ buscar, puestos });
  },
};

export default httpinfopasaje;
