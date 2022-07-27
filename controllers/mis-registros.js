const connection = require('../db');

const resultsPerPage = 20;

module.exports.index = (req, res) => {
    let sql = 'SELECT * FROM registros ORDER BY fecha DESC';
    connection.query(sql, (error, result) => {
            res.render('mis-registros/index',{registros: result,layout: './layouts/layout-datatablet'});
        });
};

module.exports.filtrar = (req, res) => {
    const {filtro} = req.params
    let sql = `SELECT * FROM registros WHERE tipo = '${filtro}'`;
    connection.query(sql, (error, result) => {
        if (error) { throw error }
        const numOfResults = result.length;
        const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
        let page = req.query.page ? Number(req.query.page) : 1;
        if (page > numberOfPages) {
            res.redirect('/?page=' + encodeURIComponent(numberOfPages));
        } else if (page < 1) {
            res.redirect('/?page=' + encodeURIComponent('1'));
        }
        const startingLimit = (page - 1) * resultsPerPage;
        sql = `SELECT * FROM registros WHERE tipo = '${filtro}' ORDER BY fecha DESC LIMIT ${startingLimit},${resultsPerPage}`;
        connection.query(sql, (error, result) => {
            if (error) { throw error }
            //si cambio resultsPerPage tengo que cambiar iterator
            let iterator = (page - 5) < 1 ? 1 : page - 5;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            if (endingLink < (page + 4)) {
                iterator -= (page + 4) - numberOfPages;
            }
            return res.render('mis-registros/filtrado',{registros: result, filtro,page, iterator,numOfResults,resultsPerPage, endingLink, numberOfPages,layout: './layouts/layout-navbar'});
        });
    });
};

module.exports.update = (req,res)=>{
    connection.query('UPDATE registros SET ? WHERE id = ?',[
        {comentario: req.body.comentario,
        estado:'PENDIENTE'},req.body.id],(error)=>{
        if(error){throw error}
        
        res.redirect('/mis-registros');
        
    });
}

