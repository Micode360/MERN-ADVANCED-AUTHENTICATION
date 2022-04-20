const router = require("express").Router();
const {  getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/auth");



router.route('/').get(protect ,getPrivateData);

/*
    Protect is a function that was created to check if the user exist in the database by
    using the user's id which was hidden in the json token.

    getPrivateData() is a function for sending a successful message
*/

module.exports = router;