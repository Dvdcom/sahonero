const express = require('express');
const router = express.Router();

const controller = require('../controllers/mis-registros');

router.get('/mis-registros', controller.index);
router.get('/mis-registros/filtrar', controller.filtrar);

module.exports = router;