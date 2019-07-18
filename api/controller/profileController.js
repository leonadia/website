const PS = require('../services/profileService');
const PROFILE = require('../models/profile')

exports.CreateData = (req,res,next) => {
    const url = req.protocol + "://" + req.get("host");
    const profile = new PROFILE({
        avatarPath: url + "/images/" + req.file.filename,
        bio: req.body.bio,
        social: req.body.socail
    })
    PS.insert(profile,res)
}

exports.GetData = (req,res,next) => {
    const id = req.body.id;
    PS.insert(id, res);
}

exports.UpdataData = (req,res,next) => {
    const url = req.protocol + "://" + req.get("host");
    const id = req.body.id;
    const profile = new PROFILE({
        avatarPath: url + "/images/" + req.file.filename,
        bio: req.body.bio,
        social: req.body.socail
    })

    PS.update(id, profile,res)

}