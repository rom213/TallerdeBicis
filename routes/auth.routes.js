const express =require('express')

const midelwareValidation=require('../midleware/validation.midellwares')

const authController=require('../controller/auth.controller')

const RouterA=express.Router();

RouterA.post('/',midelwareValidation.createUserValidation,authController.signup)
RouterA.post('/login',authController.login)

module.exports=RouterA


