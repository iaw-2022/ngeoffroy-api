const database = require("../database");

const getPartidos = async (req, res) => {
  const response = await database.query("SELECT * FROM partidos");

  if (response.rows.length > 0) {
    res.status(200).json(response.rows);
  } else {
    res.status(404).json({ error: "No se encontraron partidos" });
  }
};

const getPartidoEquipoLocal = async (req, res) => {
  const equipo_local = req.params.equipo_local;

  if (typeof equipo_local === "string") {
    const response = await database.query(
      "SELECT * FROM partidos WHERE equipo_local = $1",
      [equipo_local]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({
          error:
            "No se han encontrado partidos con ese criterio en equipo local",
        });
    }
  } else {
    res
      .status(400)
      .json({ error: "Error: Partido no encontrado bajo ese criterio" });
  }
};

const getPartidoEquipoVisitante = async (req, res) => {
  const equipo_visitante = req.params.equipo_visitante;

  if (typeof equipo_visitante === "string") {
    const response = await database.query(
      "SELECT * FROM partidos WHERE equipo_visitante = $1",
      [equipo_visitante]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(404)
        .json({
          error:
            "No se han encontrado partidos con ese criterio en equipo visitante",
        });
    }
  } else {
    res
      .status(400)
      .json({ error: "Error: Partido no encontrado bajo ese criterio" });
  }
};

const getPartidoLocalidad = async (req, res) => {
  const localidad_nombre = req.params.localidad_nombre;

  if (typeof localidad_nombre === "string") {
    const response = await database.query(
      "SELECT * FROM partidos WHERE localidad_nombre = $1",
      [localidad_nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "No se han encontrado partidos disputados bajo esa localidad" });
    }
  } else {
    res
      .status(400)
      .json({ error: "Error: Partido no encontrado bajo ese criterio" });
  }
};

const getPartidoTorneo = async (req, res) => {
  const torneo_nombre = req.params.torneo_nombre;

  if (typeof torneo_nombre === "string") {
    const response = await database.query(
      "SELECT * FROM partidos WHERE torneo_nombre = $1",
      [torneo_nombre]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "No se han encontrado partidos en ese torneo" });
    }
  } else {
    res.status(400).json({ error: "Error: Partido no encontrado bajo ese criterio" });
  }
};

const getPartidoEstado = async (req, res) => {
  const estado = req.params.estado;

  if (typeof estado === "string") {
    const response = await database.query(
      "SELECT * FROM partidos WHERE estado = $1",
      [estado]
    );

    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ error: "Partidos no encontrado bajo ese estado" });
    }
  } else {
    res.status(400).json({ error: "Error: Partido no encontrado bajo ese criterio" });
  }
};

module.exports = {
  getPartidos,
  getPartidoEquipoLocal,
  getPartidoEquipoVisitante,
  getPartidoLocalidad,
  getPartidoTorneo,
  getPartidoEstado,
};
