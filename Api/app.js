const express= require('express');
const morgan=require('morgan');
const multer=require('multer');
const routes = require('./router/index.js');

const app = express();
require('./bd.js')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//app.use(multer())

app.use('/', routes);


module.exports = app;