const express=require('express');
const { controllerRepairs }=require('../controller/workshop.controller')
const authMidellware=require('../midleware/auth.midellware')

const { existRepair }=require('../midleware/workshop.midlewares')
const RouterW=express.Router();

RouterW.use(authMidellware.protect,authMidellware.protectEmployedAccountOwner)

RouterW.route('/')
    .get(controllerRepairs.findAllRepairs)
    .post(controllerRepairs.createRepair)
RouterW.route('/:id')
    .get(existRepair, controllerRepairs.findOneRepair)
    .patch(existRepair, controllerRepairs.updateRepair)
    .delete(existRepair, controllerRepairs.deleteRepair)
    



module.exports=RouterW