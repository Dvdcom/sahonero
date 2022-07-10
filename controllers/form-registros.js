const connection = require('../db');
const session = require('express-session');

module.exports.index = (req, res) => {
    //console.log("ingresa en crear formulario")
    res.render('form-registros/index', {layout: './layouts/layout-navbar'});
}

module.exports.store = (req, res) => {
    connection.query(
        "INSERT INTO registros SET ?",
        {
            usuario: req.session.user.toUpperCase(),
            tipo: req.body.inputGroupSelect01.toUpperCase(),
            ot: req.body.ot,
            nombre_cliente: req.body.nombre.toUpperCase(),
            apellido_cliente: req.body.apellido.toUpperCase(),
            identificacion: req.body.identificacion,
            contrato: req.body.contrato,
            direccion: req.body.direccion.toUpperCase(),
            telefono: req.body.telefono,
            equipoi: req.body.equipoi.toUpperCase(),
            equipor: req.body.equipor.toUpperCase(),
            comentario: req.body.comentario.toUpperCase()
        },
        (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results);
            res.redirect("/form-registros");
        }
    );
}; 