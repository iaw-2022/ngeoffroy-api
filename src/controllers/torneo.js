const database = require("../database");

const getTorneos = async (req, res) => {
  const response = await database.query("SELECT * FROM torneos");

  if (response.rows.length > 0) {
    res.status(200).json(response.rows);
  } else {
    res.status(404).json({ error: "No se encontraron torneos" });
  }
};

const getTorneoNombre = async (req, res) => {
  const nombre = req.params.nombre;

  if (typeof nombre === "string") {
    const response = await database.query(
      "SELECT * FROM torneos WHERE nombre = $1",
      [nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Torneo no encontrado" });
    }
  } else {
    res.status(400).json({ error: "Torneo no encontrado bajo ese nombre" });
  }
};

const getTorneoIni = async (req, res) => {
  const fecha_ini = req.params.fecha_ini;
  if (typeof fecha_ini === "string") {
    const response = await database.query(
      "SELECT * FROM torneos WHERE fecha_ini = $1",
      [fecha_ini]
    );
    console.log("response: "+response);
    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Torneo no encontrado" });
    }
  } else {
    res
      .status(400)
      .json({ error: "Torneo no encontrado bajo esa fecha inicial" });
  }
};

const getTorneoFin = async (req, res) => {
  const fecha_fin = req.params.fecha_fin;

  if (typeof fecha_fin === "string") {
    const response = await database.query(
      "SELECT * FROM torneos WHERE fecha_fin = $1",
      [fecha_fin]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Torneo no encontrado" });
    }
  } else {
    res
      .status(400)
      .json({ error: "Torneo no encontrado bajo esa fecha final" });
  }
};

module.exports = {
  getTorneos,
  getTorneoIni,
  getTorneoFin,
  getTorneoNombre,
};
