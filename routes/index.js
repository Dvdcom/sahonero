const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const connection = require('../db');
const { check, body, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/',[
    check('usuario'),
    check('password'),
    body('usuario', 'El usuario es obligatorio').exists().trim().notEmpty().escape(),
    body('password', 'La contraseña es obligatorio').exists().trim().notEmpty().escape()
],(req, res) => {
    const errors = validationResult(req);
    connection.query('SELECT * FROM usuarios WHERE nombre = ?', [req.body.usuario], async (error, results) => {

        if (results.length == 0 || !(await bcryptjs.compare(req.body.password, results[0].password))) {
            console.log(errors.array())
            res.render('index', {errors: errors.array()});
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

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;