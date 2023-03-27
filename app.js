const express = require('express');
const morgan=require('morgan');
const Router=require('./routes/workshop.routs');
const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',Router);
module.exports=app;