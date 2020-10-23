let express = require('express');
let usersController = require ('../controllers/usersController.js');
let router = express.Router();

router.get('/users', usersController);

module.exports=router;
