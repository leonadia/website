const express = require('express');
const UC = require('../controller/userController');

const router = express.Router();

router.post("/signup",UC.CreateUser);
router.post("/login", UC.LoginUser);

module.exports = router;