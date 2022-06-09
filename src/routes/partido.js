const { Router } = require("express");
const router = Router();

const {
  getPartidos,
  getPartidoEquipoLocal,
  getPartidoEquipoVisitante,
  getPartidoLocalidad,
  getPartidoTorneo,
  getPartidoEstado,
} = require("../controllers/partido");

/**
 * @swagger
 * /partidos:
 *   get:
 *     description: Ruta para obtener todos los partidos.
 *     tags:
 *       - Partidos
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '404':
 *         description: No se encontraron partidos
 */
router.get("/partidos", getPartidos);

/**
 * @swagger
 * /partidos/equipo_local/{equipo_local}:
 *   get:
 *     description: Consultar por nombre de equipo local.
 *     tags:
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: equipo_local
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de equipo local
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Partido no encontrado bajo ese criterio
 *       '404':
 *         description: No se han encontrado partidos con ese criterio en equipo local
 */
router.get("/partidos/equipo_local/:equipo_local", getPartidoEquipoLocal);

/**
 * @swagger
 * /partidos/equipo_visitante/{equipo_visitante}:
 *   get:
 *     description: Consultar partido por equipo visitante
 *     tags:
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: equipo_visitante
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de equipo visitante
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Partido no encontrado bajo ese criterio
 *       '404':
 *         description: No se han encontrado partidos con ese criterio en equipo visitante
 */
router.get("/partidos/equipo_visitante/:equipo_visitante", getPartidoEquipoVisitante);

/**
 * @swagger
 * /partidos/localidad/{localidad_nombre}:
 *   get:
 *     description: Consulta partido por nombre de localidad.
 *     tags:
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: localidad_nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de localidad
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Partido no encontrado bajo ese criterio
 *       '404':
 *         description: No se han encontrado partidos disputados bajo esa localidad
 */
router.get("/partidos/localidad/:localidad_nombre", getPartidoLocalidad);

/**
 * @swagger
 * /partidos/torneo/{torneo_nombre}:
 *   get:
 *     description: Consulta partido por nombre de torneo.
 *     tags:
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: torneo_nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de torneo
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Partido no encontrado bajo ese criterio
 *       '404':
 *         description: No se han encontrado partidos en ese torneo
 */
 router.get("/partidos/torneo/:torneo_nombre", getPartidoTorneo);

 /**
 * @swagger
 * /partidos/estado/{estado}:
 *   get:
 *     description: Consulta partido por estado.
 *     tags:
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: estado
 *         schema:
 *           type: string
 *         required: true
 *         description: FINALIZADO, SUSPENDIDO, POR JUGAR (en mayusculas)
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Partido no encontrado bajo ese criterio
 *       '404':
 *         description: Partidos no encontrado bajo ese estado
 */
  router.get("/partidos/estado/:estado", getPartidoEstado);

module.exports = router;
