const { Router } = require('express');
const router = Router();
const bodyParser = require("body-parser");

const equipo = require('./controllers/equipo.js');
const partido = require('./controllers/partido.js');
const torneo = require('./controllers/torneo.js');
const jugador = require('./controllers/jugador.js');
const localidad = require('./controllers/localidad.js');

router.use(bodyParser.json());

router.get('/', (request, response) => {
    response.json({
        message: 'API | ABS'
    });
});

router.get('/equipos', equipo.getEquipos);
router.get('/equipos/:nombre', equipo.getEquipoPorNombre);
router.get('/equipos/nombre_estadio/:nombre_estadio', equipo.getEquipoPorEstadio);
router.get('/equipos/capitan/:capitan', equipo.getEquipoCapitan);

router.get('/partidos', partido.getPartidos);
router.get('/partidos/equipo_local/:equipo_local', partido.getPartidoEquipoLocal);
router.get('/partidos/equipo_visitante/:equipo_visitante', partido.getPartidoEquipoVisitante);
router.get('/partidos/localidad/:localidad_nombre', partido.getPartidoLocalidad);
router.get('/partidos/torneo/:torneo_nombre', partido.getPartidoTorneo);
router.get('/partidos/:estado', partido.getPartidoEstado);

router.get('/jugadores', jugador.getJugadores);
router.get('/jugadores/:nombre', jugador.getJugadorNombre);
router.get('/jugadores/:apellido', jugador.getJugadorApellido);
router.get('/jugadores/:fecha_nac', jugador.getJugadorFechaNac);
router.get('/jugadores/:dni', jugador.getJugadorDni);
router.get('/jugadores/:sexo', jugador.getJugadorSexo);
router.get('/jugadores/:puesto', jugador.getJugadorPuesto);
router.get('/jugadores/:equipo_nombre', jugador.getJugadorEquipo);

router.get('/torneos', torneo.getTorneos);
router.get('/torneos/:nombre', torneo.getTorneoNombre);
router.get('/torneos/:fecha_ini', torneo.getTorneoIni);
router.get('/torneos/:fecha_fin', torneo.getTorneoFin);

router.get('/localidades', localidad.getLocalidades);
router.get('/localidades/:nombre', localidad.getLocalidadNombre);
router.get('/localidades/:cod_postal', localidad.getLocalidadPostal);
router.get('/localidades/:poblacion', localidad.getLocalidadHabitantes);

// Rutas de autenticacion
//router.post('/autenticar', authenticate.autenticar);

module.exports = router;