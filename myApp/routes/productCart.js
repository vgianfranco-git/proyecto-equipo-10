let express = require('express');
let productCartController = require ('../controllers/productCartController.js');
let router = express.Router();

router.get('/productCart', productCartController);

module.exports=router;