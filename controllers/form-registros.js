const connection = require('../db');
const session = require('express-session');

module.exports.index = (req, res) => {
    //console.log("ingresa en crear formulario")
    res.render('form-registros/index', {layout: './layouts/layout-navbar'});
}

module.exports.store = (req, res) => {
    
    connection.query('INSERT INTO registros SET ?', 
        { usuario: req.session.user,
          tipo: req.body.inputGroupSelect01, 
          ot: req.body.ot,
          nombre_cliente: req.body.nombre,
          identificacion: req.body.identificacion,
          contrato: req.body.contrato,
          direccion: req.body.direccion,
          telefono: req.body.telefono,
          equipoi: req.body.equipoi,
          equipor: req.body.equipor
        }, 
        (error, results) => {
            
        if (error) { throw error }
        console.log(results);
        res.redirect('/form-registros');
    });
} 