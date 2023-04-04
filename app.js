const express = require('express');
const morgan=require('morgan');
const RouterW=require('./routes/workshop.routs');
const RouterU=require('./routes/user.routes');

const app=express();
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1', RouterW);
app.use('/api/v1', RouterU);

module.exports=app;