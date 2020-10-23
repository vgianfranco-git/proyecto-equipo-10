let express = require('express');
let registerController = require ('../controllers/registerController.js');
let router = express.Router();

router.get('/register', registerController);

module.exports=router;