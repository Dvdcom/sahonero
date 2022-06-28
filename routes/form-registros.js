const express = require('express');
const router = express.Router();

router.get('/form-registros', (req, res) => {
    res.render('form-registros/index',{layout: './layouts/layout-navbar'});
});

module.exports = router;