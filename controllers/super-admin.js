const connection = require('../db');
const bcryptjs = require('bcryptjs');

module.exports.index = (req,res)=>{
    res.render('super-admin/index',{layout: './layouts/layout-navbar'});
};

module.exports.create = (req, res) => {
    res.render('super-admin/create', { layout: './layouts/layout-navbar' });
}

module.exports.store = async (req, res) => {
    const hash = await bcryptjs.hash(req.body.password, 8);

    connection.query('INSERT INTO usuarios SET ?', 
        { 
        nombre: req.body.usuario, 
        email: req.body.email,
        password: hash,
        rol: req.body.rol
        }, 
        (error, results) => {
            
        if (error) { throw error }

        res.redirect('/super-admin/create');
    });
}