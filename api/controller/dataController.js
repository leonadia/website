const DS = require('../services/dataService')
const Data = require('../models/data')

exports.AddData = (req, res, next) => {
    console.log(req.body)
    const data = new Data({
      title: req.body.title,
      content: req.body.content,
    });
    DS.insert(data,res);

  };

  exports.getData = (req, res, next) => {
    const data = Data.find();
    DS.get(data,res);
    
  };