const US = require('../services/userService')
const User = require('../models/user');
const sha256 = require('sha256');

exports.CreateUser = (req,res,next) => {
    const user = new User({
        nameAndPsword: sha256(req.body.name + req.body.psword),
        email: req.body.email
    })

    US.create(user,res);
}

exports.LoginUser = (req, res, next) => {
    const user = new User({
        nameAndPsword: sha256(req.body.name + req.body.psword),
        email: req.body.email
    })
    const userModel = User;
    US.login(userModel,user, res);
}