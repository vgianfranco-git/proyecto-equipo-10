let express = require('express');
let productDetailController = require ('../controllers/productDetailController.js');
let router = express.Router();

router.get('/productDetail', productDetailController);

module.exports=router;