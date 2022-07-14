const express = require('express');
const router = express.Router();

const controller = require('../controllers/mis-registros');

router.get('/mis-registros', controller.index);

module.exports = router;