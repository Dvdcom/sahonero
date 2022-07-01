const express = require('express');
const router = express.Router();

const controller = require('../controllers/form-registros');

//index
router.get('/form-registros', controller.index);
router.post('/form-registros/store', controller.store);

module.exports = router;