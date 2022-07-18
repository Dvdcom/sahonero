const express = require('express');
const router = express.Router();

const controller = require('../controllers/mis-registros');

router.get('/mis-registros', controller.index);
router.get('/mis-registros/:filtro?', controller.filtrar);
router.get('/mis-registros/:id/edit', controller.edit);
router.put('/mis-registros/update', controller.update);

module.exports = router;