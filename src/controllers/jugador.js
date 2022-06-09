const database = require("../database");

const getJugadores = async (req, res) => {
  const response = await database.query("SELECT * FROM jugadors");

  if (response.rows.length > 0) {
    res.status(200).json(response.rows);
  } else {
    res.status(404).json({ error: "No se encontraron jugadores" });
  }
};

const getJugadorNombre = async (req, res) => {
  const nombre = req.params.nombre;

  if (typeof nombre === "string") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE nombre = $1",
      [nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugador no encontrado" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado bajo ese nombre" });
  }
};

const getJugadorApellido = async (req, res) => {
  const apellido = req.params.apellido;

  if (typeof apellido === "string") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE apellido = $1",
      [apellido]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugador no encontrado" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado bajo ese apellido" });
  }
};

const getJugadorDni = async (req, res) => {
  const dni = req.params.dni;

  if (!isNaN(dni)) {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE dni = $1",
      [dni]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugador no encontrado" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado bajo ese dni" });
  }
};

const getJugadorFechaNac = async (req, res) => {
  const fecha_nac = req.params.fecha_nac;
  console.log(fecha_nac);
  if (typeof fecha_nac === "date") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE fecha_nac = $1",
      [fecha_nac]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugador no encontrado" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado bajo esa fecha" });
  }
};

const getJugadorSexo = async (req, res) => {
  const sexo = req.params.sexo;

  if (typeof sexo === "string") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE sexo = $1",
      [sexo]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({ error: "Jugadores no encontrados bajo ese criterio" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado con esa entrada" });
  }
};

const getJugadorPuesto = async (req, res) => {
  const puesto = req.params.puesto;
  if (typeof puesto === "string") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE puesto = $1",
      [puesto]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugador no encontrado bajo ese puesto" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado con esa entrada" });
  }
};

const getJugadoresEquipo = async (req, res) => {
  const equipo_nombre = req.params.equipo_nombre;
  console.log(req.params);
  if (typeof equipo_nombre === "string") {
    const response = await database.query(
      "SELECT * FROM jugadors WHERE equipo_nombre = $1",
      [equipo_nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Jugadores no encontrado bajo ese nombre de equipo" });
    }
  } else {
    res.status(400).json({ error: "Jugador no encontrado con esa entrada" });
  }
};

module.exports = {
  getJugadores,
  getJugadorNombre,
  getJugadorApellido,
  getJugadorDni,
  getJugadorSexo,
  getJugadorPuesto,
  getJugadorFechaNac,
  getJugadoresEquipo,
};
