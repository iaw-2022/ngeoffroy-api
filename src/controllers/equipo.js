const database = require('../database');

const getEquipos = async(req, res) => {
    const response = await database.query('SELECT * FROM equipos');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'No se encontraron equipos'});
    }
};

const getEquipoPorEstadio = async (req, res) => {
    const estadio = req.params.nombre_estadio;
    
    if(typeof estadio === 'string') {
        const response = await database.query('SELECT * FROM equipos WHERE nombre_estadio = $1', [estadio]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Equipo no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Equipo no encontrado bajo ese nombre de estadio'});
    }
};

const getEquipoPorNombre = async (req, res) => {
    const nombre = req.params.nombre;
    
    if(typeof nombre === 'string') {
        const response = await database.query('SELECT * FROM equipos WHERE nombre = $1', [nombre]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Equipo no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Equipo no encontrado bajo ese nombre'});
    }
};

const getEquipoCapitan = async (req, res) => {
    const capitan = req.params.capitan;
    
    if(typeof capitan === 'string') {
        const response = await database.query('SELECT * FROM equipos WHERE capitan = $1', [capitan]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Equipo no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Equipo no encontrado bajo ese capitan'});
    }
};

module.exports = {
    getEquipos,
    getEquipoPorNombre,
    getEquipoPorEstadio, 
    getEquipoCapitan,
};