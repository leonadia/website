const express = require('express')

const router = express.Router()
const Data = require('../models/data')

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'get method'
    })
})

router.post("/", (req, res, next) => {
    const data = new Data({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      content: req.body.content
    });
    product
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;