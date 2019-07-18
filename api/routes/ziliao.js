const express = require('express')
const PS = require('../controller/profileController')
const checkAuth = require('../middleware/check-auth');
const extractFile = require("../middleware/file");

const router = express.Router();

router.get('/', checkAuth,PS.GetData);
router.post('/', checkAuth,extractFile,PS.CreateData);
router.put('/',checkAuth, extractFile,PS.UpdataData);