const express=require('express');
const { controllerUsers }=require('../controller/user.controller')
const { existUser }=require('../midleware/workshop.midlewares')
const RouterU=express.Router();



RouterU.route('/')
    .get(controllerUsers.findAllUsers)
    .post(controllerUsers.createUser)
RouterU.route(' /:id')
    .get(existUser, controllerUsers.findOneUser)
    .patch(existUser, controllerUsers.updateUser)
    .delete(existUser, controllerUsers.deleteUser)

    module.exports=RouterU