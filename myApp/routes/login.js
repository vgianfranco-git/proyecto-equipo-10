let express = require('express');
let loginController = require ('../controllers/loginController.js');
let router = express.Router();

router.get('/login', loginController);

module.exports=router;