const connection = require('../db');
//const session = require('express-session');

module.exports.index = (req, res) => {
    res.render('form-registros/index', {values: {} ,layout: './layouts/layout-navbar'});
}

module.exports.store = (req, res) => {
    connection.query(
        "INSERT INTO registros SET ?",
        {
            usuario: req.session.user.toUpperCase(),
            tipo: req.body.inputGroupSelect01,
            ot: req.body.ot,
            nombre_cliente: req.body.nombre.toUpperCase(),
            apellido_cliente: req.body.apellido.toUpperCase(),
            identificacion: req.body.identificacion,
            contrato: req.body.contrato,
            direccion: req.body.direccion.toUpperCase(),
            telefono: req.body.telefono,
            equipoi: req.body.equipoi.toUpperCase(),
            equipoi2: req.body.equipoi2.toUpperCase(),
            equipoi3: req.body.equipoi3.toUpperCase(),
            equipoi4: req.body.equipoi4.toUpperCase(),
            equipoi5: req.body.equipoi5.toUpperCase(),
            equipor: req.body.equipor.toUpperCase(),
            equipor6: req.body.equipor6.toUpperCase(),
            equipor7: req.body.equipor7.toUpperCase(),
            equipor8: req.body.equipor8.toUpperCase(),
            equipor9: req.body.equipor9.toUpperCase(),
            comentario: req.body.comentario.toUpperCase()
        },
        (error, results) =>{
            if (error) {throw error}
            console.log(results);
            //res.render('form-registros/index', {layout: './layouts/layout-navbar'});
            res.render('form-registros/index',{values: req.body, layout: './layouts/layout-navbar'});
        });
}; 