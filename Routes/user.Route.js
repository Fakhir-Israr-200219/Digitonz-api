const express =require('express');
const asyncHandler = require("../middleware/errorHandler")

const { registerUser, loginUser, currentUser } = require('../Controller/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/current',validateToken, currentUser);

module.exports = router;