const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
//const ejs = require('ejs');

const connection = require('../db');
const { check, body, validationResult } = require('express-validator');


router.get('/', (req, res) => {
    //console.log({valores:[{nombre:'asd',password:'123'}]});
    res.render('index',{values:{}});
});

router.post('/',[
    check('usuario'),
    check('password'),
    body('usuario', 'El usuario es obligatorio').exists().trim().notEmpty().escape(),
    body('password', 'La contraseña es obligatorio').exists().trim().notEmpty().escape()
],(req, res) => {
    const errors = validationResult(req);
    connection.query('SELECT * FROM usuarios WHERE nombre = ?', [req.body.usuario], async (error, results) => {

        if (results.length == 0){
        res.render('index', {values: req.body, errors: errors.array()});
        
        }else if(!(await bcryptjs.compare(req.body.password, results[0].password))){
            res.render('index', {values: req.body, errors: [{param: 'matchpass',msg:'Credenciales invalidas'}]});
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