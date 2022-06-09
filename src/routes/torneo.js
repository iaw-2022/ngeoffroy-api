const { Router } = require("express");
const router = Router();

const {
  getTorneos,
  getTorneoNombre,
  getTorneoIni,
  getTorneoFin
} = require("../controllers/torneo");

/**
 * @swagger
 * /torneos:
 *   get:
 *     description: Ruta para obtener todos los torneos.
 *     tags:
 *       - Torneos
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/torneos", getTorneos);

/**
 * @swagger
 * /torneos/{nombre}:
 *   get:
 *     description: Consultar por nombre de un torneo.
 *     tags:
 *       - Torneos
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de torneo
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Torneo no encontrado bajo ese criterio
 *       '404':
 *         description: Torneo no encontrado bajo ese nombre
 */
router.get("/torneos/:nombre", getTorneoNombre);

/**
 * @swagger
 * /torneos/fecha_ini/{fecha_ini}:
 *   get:
 *     description: Consultar torneo por fecha de inicio
 *     tags:
 *       - Torneos
 *     parameters:
 *       - in: path
 *         name: fecha_ini
 *         schema:
 *           type: date
 *         required: true
 *         description: Fecha inicial de un torneo
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Fecha inválida
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/torneos/fecha_ini/:fecha_ini", getTorneoIni);

/**
 * @swagger
 * /torneos/fecha_fin/{fecha_fin}:
 *   get:
 *     description: Consulta torneo por fecha de finalización.
 *     tags:
 *       - Torneos
 *     parameters:
 *       - in: path
 *         name: fecha_fin
 *         schema:
 *           type: date
 *         required: true
 *         description: Fecha de finalización
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Fecha de finalización incorrecta
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/equipo_nombre/:equipo_nombre", getTorneoFin);

module.exports = router;
