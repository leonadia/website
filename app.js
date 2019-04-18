const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const guanliRoutes = require('./api/routes/guanli');

const app = express();

mongoose
    .connect(
      'mongodb://heroku_lg8l5kwt:zheshimima123@ds253804.mlab.com:53804/heroku_lg8l5kwt',
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/guanli', guanliRoutes)

module.exports = app;