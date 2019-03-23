const express = require('express')
const DC = require('../controller/dataController')

const router = express.Router();

router.get("/", DC.getData);
router.post("/", DC.AddData);
router.delete("/", DC.DeleteData);
router.put("/", DC.UpdateData)

module.exports = router;