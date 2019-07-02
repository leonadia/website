const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");


const guanliRoutes = require('./api/routes/guanli');
const yonghuRoutes = require('./api/routes/yonghu');

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

// mongoose
//     .connect(
//       'mongodb://localhost/data',
//         { useNewUrlParser: true },
//         (err)=> {
//             if(err === null) {
//                 console.log('connected');
//             }
//             else {
//                 console.log(err);
//             }
//         }
//     );
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("api/images")));

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
app.use('/yonghu', yonghuRoutes)

module.exports = app;