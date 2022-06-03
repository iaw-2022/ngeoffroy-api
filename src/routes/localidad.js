const { Router } = require("express");
const router = Router();

const {
  getLocalidades,
  getLocalidadNombre,
  getLocalidadPostal,
  getLocalidadHabitantes
} = require("../controllers/localidad");

/**
 * @swagger
 * /jugadores:
 *   get:
 *     description: Ruta para obtener todas las localidad.
 *     tags:
 *       - Localidades
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/localidades", getLocalidades);

/**
 * @swagger
 * /localidades/{nombre}:
 *   get:
 *     description: Consultar por nombre de una localidad.
 *     tags:
 *       - Localidades
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de localidad
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Nombre de localidad incorrecta
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/localidades/:nombre", getLocalidadNombre);

/**
 * @swagger
 * /localidades/cod_postal/{cod_postal}:
 *   get:
 *     description: Consultar localidad por código postal
 *     tags:
 *       - Localidades
 *     parameters:
 *       - in: path
 *         name: apellido
 *         schema:
 *           type: integer
 *         required: true
 *         description: Codigo postal de una localidad
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Código postal invalido
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/localidades/cod_postal/:cod_postal", getLocalidadPostal);

/**
 * @swagger
 * /localidades/poblacion/{poblacion}:
 *   get:
 *     description: Consulta jugador por cantidad de habitantes.
 *     tags:
 *       - Localidades
 *     parameters:
 *       - in: path
 *         name: poblacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cantidad de habitantes
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Cantidad de habitantes incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/localidades/poblacion/:poblacion", getLocalidadHabitantes);

module.exports = router;
