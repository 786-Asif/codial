const express = require('express');
const router = express.Router();

const userControler = require('../controllers/users_controller');

router.get('/profile',userControler.profile);


module.exports=router;
