const express=require('express');
const { controllerUsers, controllerRepairs }=require('../controller/workshop.controller')
const { existUser, existRepair }=require('../midleware/workshop.midlewares')
const Router=express.Router();



Router.route('/users')
    .get(controllerUsers.findAllUsers)
    .post(controllerUsers.createUser)
Router.route('/users/:id')
    .get(existUser, controllerUsers.findOneUser)
    .patch(existUser, controllerUsers.updateUser)
    .delete(existUser, controllerUsers.deleteUser)


Router.route('/repairs')
    .get(controllerRepairs.findAllRepairs)
    .post(controllerRepairs.createRepair)
Router.route('/repairs/:id')
    .get(existRepair, controllerRepairs.findOneRepair)
    .patch(existRepair, controllerRepairs.updateRepair)
    .delete(existRepair, controllerRepairs.deleteRepair)



module.exports=Router