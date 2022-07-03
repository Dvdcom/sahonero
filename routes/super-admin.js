const express = require('express');
const router = express.Router();

const controller = require('../controllers/super-admin');
/*CAPA 2*/

router.get('/super-admin/index', controller.index);

router.get('/super-admin/create', controller.create);

router.post('/super-admin/store', controller.store);

module.exports = router;