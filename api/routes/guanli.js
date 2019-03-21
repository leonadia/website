const express = require('express')

const router = express.Router()
const DC = require('../controller/dataController')

router.get('/', DC.getData);

router.post("/", DC.AddData)

module.exports = router;