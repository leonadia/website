const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const guanliRoutes = require('./api/routes/guanli');

const app = express();

mongoose
    .connect(
      'mongodb://leonadia:zheshimima123@ds253804.mlab.com:53804/heroku_lg8l5kwt',
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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/', guanliRoutes)

module.exports = app;