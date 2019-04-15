const DS = require('../services/dataService')
const Data = require('../models/data')

exports.AddData = (req, res, next) => {
    const data = new Data({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    });
    console.log(req.body)
    DS.insert(data,res);

  };

  exports.getData = (req, res, next) => {
    const data = Data
    DS.get(data,res);
    
  };

  exports.DeleteData = (req, res, next) => {
    const data = Data;
    const id = req.query.id;
    DS.delete(data,id,res)
  }

  exports.UpdateData = (req, res, next) => {
    const data = Data;
    const updata = new Data({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    });
    const id = req.query.id;
    console.log(id);
    DS.update(data,id,updata,res);
  }