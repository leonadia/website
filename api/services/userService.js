const sha256 = require('sha256');
const jwt = require('jsonwebtoken')

exports.create = (user, res) => {
    user
    .save()
    .then(newUser =>{
        res.status(200).json({
            message: "succesfully create new user",
            user: {
                user: newUser
            }
        });
    })
    .catch(error => {
        res.status(500).json({
          message: "Creating a user failed!"
        });
    });
}

exports.login = (model,user, res) => {
    let fetchedUser;
    model.findOne({nameAndPsword: user.nameAndPsword})
    .then(user => {
        if(!user) {
            console.log(user.nameAndPsword)
            return res.status(401).json({
                message:"user name or password is wrong!"
            });
        }
        fetchedUser = user;
        return fetchedUser.nameAndPsword = user.nameAndPsword;
    })
    .then(result => {
        if(!result) {
            return res.status(401).json({
                message: "user name or password is wrong!"
            });
        }
        const token = jwt.sign(
            {nameAndPsword: fetchedUser.nameAndPsword, userId: fetchedUser._id},
            user.nameAndPsword,
            {expiresIn:"1h"}
        );
        res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: fetchedUser._id
        });
    })
    .catch(err => {
        console.log(err)
        return res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      });
}
