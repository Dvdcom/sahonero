const express = require('express');
const router = express.Router();

router.get('/bienvenida', (req, res) => {
    res.render('bienvenida/index',{layout: './layouts/layout-navbar'});
});

module.exports = router;