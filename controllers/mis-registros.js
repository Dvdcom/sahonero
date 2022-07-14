const connection = require('../db');

const resultsPerPage = 20;

module.exports.index = (req, res) => {
    let sql = 'SELECT * FROM registros';
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
        sql = `SELECT * FROM registros LIMIT ${startingLimit},${resultsPerPage}`;

        connection.query(sql, (error, result) => {
            if (error) { throw error }
            //si cambio resultsPerPage tengo que cambiar iterator
            let iterator = (page - -2) < 1 ? 1 : page - -2;
            let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
            
            if (endingLink < (page + 4)) {
                iterator -= (page + 4) - numberOfPages;
            }
            res.render('mis-registros/index',{registros: result, page, iterator, endingLink, numberOfPages,layout: './layouts/layout-navbar'});

        });
    });
};