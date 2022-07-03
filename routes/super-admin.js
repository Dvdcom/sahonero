const express = require('express');
const router = express.Router();

const controller = require('../controllers/super-admin');
/*CAPA 2*/
router.get('/super-admin',(req,res)=>{
    res.render('super-admin/index',{layout: './layouts/layout-super'});
});

router.post('/super-admin/store', controller.store);

module.exports = router;