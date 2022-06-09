const database = require("../database");

const getLocalidades = async (req, res) => {
  const response = await database.query("SELECT * FROM localidads");

  if (response.rows.length > 0) {
    res.status(200).json(response.rows);
  } else {
    res.status(404).json({ error: "No se encontraron localidades" });
  }
};

const getLocalidadNombre = async (req, res) => {
  const nombre = req.params.nombre;

  if (typeof nombre === "string") {
    const response = await database.query(
      "SELECT * FROM localidads WHERE nombre = $1",
      [nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({ error: "Localidad no encontrada bajo ese nombre" });
    }
  } else {
    res.status(400).json({ error: "Error: Localidad no encontrada" });
  }
};

const getLocalidadPostal = async (req, res) => {
  const cod_postal = req.params.cod_postal;
  if (!isNaN(cod_postal)) {
    const response = await database.query(
      "SELECT * FROM localidads WHERE cod_postal = $1",
      [cod_postal]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({ error: "Localidad no encontrada bajo ese codigo postal" });
    }
  } else {
    res.status(400).json({ error: "Error: Localidad no encontrada" });
  }
};

const getLocalidadHabitantes = async (req, res) => {
  const cant_habitantes = req.params.cant_habitantes;
  console.log(cant_habitantes);
  if (!isNaN(cant_habitantes)) {
    const response = await database.query(
      "SELECT * FROM localidads WHERE cant_habitantes = $1",
      [cant_habitantes]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({ error: "Localidad no encontrada bajo esa población" });
    }
  } else {
    res.status(400).json({ error: "Error: Localidad no encontrada" });
  }
};

module.exports = {
  getLocalidades,
  getLocalidadHabitantes,
  getLocalidadPostal,
  getLocalidadNombre,
};
