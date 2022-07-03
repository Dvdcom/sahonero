const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const connection = require('../db');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE nombre = ?', [req.body.usuario], async (error, results) => {

        if (results.length == 0 || !(await bcryptjs.compare(req.body.password, results[0].password))) {
            res.send('El correo y/o la contraseña son icorrectos');
        } else {
            req.session.user = results[0].nombre;
            req.session.rol = results[0].rol;
            if (results[0].rol == 'Super-Admin'){
                res.redirect('/super-admin/index');
            }else{
                res.redirect('/bienvenida');
            }

            
        }

    });
});

module.exports = router;