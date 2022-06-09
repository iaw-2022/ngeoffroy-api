const { Router } = require('express');
const router = Router();

const { getEquipos, getEquipoPorNombre, getEquipoPorEstadio, getEquipoCapitan } = require('../controllers/equipo');

/**
 * @swagger
 * /equipos:
 *   get:
 *     description: Ruta para obtener todos los equipos.
 *     tags: 
 *       - Equipos
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '404':
 *         description: Consulta no encontrada
 */
router.get('/equipos', getEquipos);

/**
 * @swagger
 * /equipos/{nombre}:
 *   get:
 *     description: Consultar por nombre de un equipo.
 *     tags: 
 *       - Equipos
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de equipo
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Nombre inválido
 *       '404':
 *         description: Consulta no encontrada
 */
router.get('/equipos/:nombre', getEquipoPorNombre);

/**
 * @swagger
 * /equipos/nombre_estadio/{nombre_estadio}:
 *   get:
 *     description: Consultar equipo por nombre de estadio
 *     tags: 
 *       - Equipos
 *     parameters:
 *       - in: path
 *         name: nombre_estadio
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de estadio
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Nombre de estadio invalido
 *       '404':
 *         description: Consulta no encontrada
 */
 router.get('/equipos/nombre_estadio/:nombre_estadio', getEquipoPorEstadio);

/**
 * @swagger
 * /equipos/capitan/{capitan}:
 *   get:
 *     description: Consulta un equipo por nombre de capitan.
 *     tags: 
 *       - Equipos
 *     parameters:
 *       - in: path
 *         name: capitan
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de capitan
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Nombre de capitan incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
router.get('/equipos/capitan/:capitan', getEquipoCapitan);

module.exports = router;