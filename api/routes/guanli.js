const express = require('express')
const DC = require('../controller/dataController')
const checkAuth = require('../middleware/check-auth');
const extractFile = require("../middleware/file");

const router = express.Router();

router.get("/", DC.getData);
router.post("/upload", checkAuth, extractFile,DC.AddData);
router.post("/", checkAuth,DC.insertData);
router.delete("/", checkAuth,DC.DeleteData);
router.put("/", checkAuth, extractFile,DC.UpdateData)


module.exports = router;