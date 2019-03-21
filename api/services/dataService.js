const Data = require('../models/data')

exports.insertData = (data,res) => {
    data
    .save()
    .then(createdData => {
        res.status(201).json({
            message: "successfully insert",
            data: {
                createdData,
                id: createdData._id
            }
        })
    })
    .catch()
};