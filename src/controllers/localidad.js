const database = require('../database');

const getLocalidades = async(req, res) => {
    const response = await database.query('SELECT * FROM localidades');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'No se encontraron localidades'});
    }
};

const getLocalidadNombre = async (req, res) => {
    const nombre = req.params.nombre;
    
    if(typeof nombre === 'string') {
        const response = await database.query('SELECT * FROM localidades WHERE nombre = $1', [nombre]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Localidad no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Localidad no encontrado bajo ese nombre'});
    }
};

const getLocalidadPostal = async (req, res) => {
    const cod_postal = req.params.cod_postal;
    
    if(!isNaN(cod_postal)) {
        const response = await database.query('SELECT * FROM localidades WHERE cod_postal = $1', [cod_postal]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Localidad no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Localidad no encontrado bajo ese codigo postal'});
    }
};

const getLocalidadHabitantes = async (req, res) => {
    const cant_habitantes = req.params.cant_habitantes;
    
    if(!isNaN(cant_habitantes)) {
        const response = await database.query('SELECT * FROM localidades WHERE cant_habitantes = $1', [cant_habitantes]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Localidad no encontrado'});
        }
    } else {
        res.status(400).json({error: 'Localidad no encontrado bajo esa poblacion'});
    }
};

module.exports = {
    getLocalidades,
    getLocalidadHabitantes,
    getLocalidadPostal,
    getLocalidadNombre
};