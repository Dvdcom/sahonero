const connection = require('../db');

module.exports.index = (req,res)=>{
    connection.query('SELECT * FROM registros',(error,results)=>{
        if(error){throw error}
        res.render('mis-registros/index',{registros: results, layout:'./layouts/layout-navbar'});
    });
};