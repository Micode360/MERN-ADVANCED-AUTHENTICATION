const express = require('express');
const router = express.Router();

const { 
    register,
    login,
    forgotPassword,
    resetPassword
 } = require('../controllers/auth');


 //remember to delete cacert.pem if you are not using it

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/forgotpassword').post(forgotPassword);

router.route('/resetpassword/:resetToken').put(resetPassword);



module.exports = router