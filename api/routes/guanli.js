const express = require('express')
const DC = require('../controller/dataController')
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get("/", DC.getData);
router.post("/", checkAuth,DC.AddData);
router.delete("/", checkAuth,DC.DeleteData);
router.put("/", checkAuth,DC.UpdateData)

module.exports = router;