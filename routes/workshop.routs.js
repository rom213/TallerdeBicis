const express=require('express');
const { controllerRepairs }=require('../controller/workshop.controller')
const { existRepair }=require('../midleware/workshop.midlewares')
const Router=express.Router();


Router.route('/repairs')
    .get(controllerRepairs.findAllRepairs)
    .post(controllerRepairs.createRepair)
Router.route('/repairs/:id')
    .get(existRepair, controllerRepairs.findOneRepair)
    .patch(existRepair, controllerRepairs.updateRepair)
    .delete(existRepair, controllerRepairs.deleteRepair)



module.exports=Router