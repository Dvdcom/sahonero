const express = require('express');
const router = express.Router();

/*CAPA 2*/
router.get('/super-admin',(req,res)=>{
    res.render('super-admin/index',{layout: './layouts/layout-super'});
});

module.exports = router;