const express=require('express');
const { controllerUsers }=require('../controller/user.controller')
const { existUser }=require('../midleware/workshop.midlewares')
const Router=express.Router();



Router.route('/users')
    .get(controllerUsers.findAllUsers)
    .post(controllerUsers.createUser)
Router.route('/users/:id')
    .get(existUser, controllerUsers.findOneUser)
    .patch(existUser, controllerUsers.updateUser)
    .delete(existUser, controllerUsers.deleteUser)