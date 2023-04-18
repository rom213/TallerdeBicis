const express = require('express');
const morgan=require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/error.controller');

const RouterW=require('./routes/workshop.routs');
const RouterU=require('./routes/user.routes');
const RouterA=require('./routes/auth.routes')



const app=express();
app.use(express.json());



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


app.use('/api/v1/workshop', RouterW);
app.use('/api/v1/user', RouterU);
app.use('/api/v1/auth', RouterA);

app.all('*', (req, res, next) => {
    return next(
      new AppError(
        `cannot find ${req.originalUrl} on this server!`,
        404
      )
    );
  });

app.use(globalErrorHandler)

module.exports=app;