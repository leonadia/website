const DS = require('../services/dataService')
const Data = require('../models/data')

exports.AddData = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    console.log(req.file)
    const data = new Data({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
      top:req.body.top,
      imagePath: url + "/images/" + req.file.filename,
      creator: req.userData.userId
    });
    console.log(req.body)
    DS.insert(data,res);

  };

  exports.insertData = (req, res, next) => {
    console.log(req.file)
    const data = new Data({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
      top:req.body.top,
      creator: req.userData.userId
    });
    console.log(req.body)
    DS.insert(data,res);

  }

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
    const url = req.protocol + "://" + req.get("host");

    const data = Data;
    const updata = new Data({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      top: req.body.top,
      imagePath: url + "/images/" + req.file.filename,
      status: req.body.status
    });
    const id = req.query.id;
    console.log(id);
    DS.update(data,id,updata,res);
  }