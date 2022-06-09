const { Router } = require("express");
const router = Router();

const {
  getJugadores,
  getJugadorNombre,
  getJugadorApellido,
  getJugadorFechaNac,
  getJugadorDni,
  getJugadorSexo,
  getJugadorPuesto,
  getJugadorEquipo,
} = require("../controllers/jugador");

/**
 * @swagger
 * /jugadores:
 *   get:
 *     description: Ruta para obtener todos los jugadores.
 *     tags:
 *       - Jugadores
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores", getJugadores);

/**
 * @swagger
 * /jugadores/{nombre}:
 *   get:
 *     description: Consultar por nombre de un equipo.
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de jugador
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Nombre de jugador inválido
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/:nombre", getJugadorNombre);

/**
 * @swagger
 * /jugadores/apellido/{apellido}:
 *   get:
 *     description: Consultar jugador por apellido
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: apellido
 *         schema:
 *           type: string
 *         required: true
 *         description: Apellido jugador
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Apellido invalido
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/apellido/:apellido", getJugadorApellido);

/**
 * @swagger
 * /jugadores/fecha_nac/{fecha_nac}:
 *   get:
 *     description: Consulta jugador por fecha de nacimiento.
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: fecha_nac
 *         schema:
 *           type: date
 *         required: true
 *         description: Fecha de nacimiento
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Fecha incorrecta
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/fecha_nac/:fecha_nac", getJugadorFechaNac);

/**
 * @swagger
 * /jugadores/dni/{dni}:
 *   get:
 *     description: Consultar jugador por dni
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: dni
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dni jugador
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Dni incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/dni/:dni", getJugadorDni);

/**
 * @swagger
 * /jugadores/sexo/{sexo}:
 *   get:
 *     description: Consultar jugador por sexo
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: sexo
 *         schema:
 *           type: string
 *         required: true
 *         description: Sexo del jugador
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Sexo incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/sexo/:sexo", getJugadorSexo);

/**
 * @swagger
 * /jugadores/puesto/{puesto}:
 *   get:
 *     description: Consultar jugador por puesto
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: puesto
 *         schema:
 *           type: string
 *         required: true
 *         description: Puesto del jugador
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Puesto incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
router.get("/jugadores/puesto/:puesto", getJugadorPuesto);

/**
 * @swagger
 * /jugadores/equipo_nombre/{equipo_nombre}:
 *   get:
 *     description: Consultar jugadores por nombre de equipo
 *     tags:
 *       - Jugadores
 *     parameters:
 *       - in: path
 *         name: equipo_nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de equipo de los jugadores a consltar
 *     responses:
 *       '200':
 *         description: Consulta exitosa
 *       '400':
 *         description: Equipo incorrecto
 *       '404':
 *         description: Consulta no encontrada
 */
 router.get("/jugadores/equipo_nombre/:equipo_nombre", getJugadoresEquipo);

module.exports = router;
