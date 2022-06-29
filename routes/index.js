const express = require('express');
const router = express.Router();

const connection = require('../db');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE nombre = ?', [req.body.usuario], async (error, results) => {

        if (error) { throw error }
        if (results.length == 0) {
            console.log('El usuario y/o la contraseña es incorrecta.');
            //res.send('El usuario y/o la contraseña es incorrecta.');
        } else {
            req.session.user_id = results[0].id;
            req.session.user_usuario = results[0].nombre;
            res.redirect('/bienvenida');
        }


/*         if (results.length == 0 || !(await bcryptjs.compare(req.body.password, results[0].password))) {
            res.send('El usuario y/o la contraseña es incorrecta.');
        } else {
            req.session.user_id = results[0].id;
            req.session.user_usuario = results[0].nombre;
            res.redirect('/bienvenida');
        } */
    });
});

module.exports = router;