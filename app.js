const express = require('express');
const app = express();
const mongoose = require('mongoose');
const guanliRoutes = require('./api/routes/guanli')


mongoose.connect(
    'mongodb://localhost/shujv',
    { useNewUrlParser: true },
    (err)=> {
        if(err === null) {
            console.log('connected');
        }
        else {
            console.log(err);
        }
    }
);



app.use('/guanli', guanliRoutes)

module.exports = app;