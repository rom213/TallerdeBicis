const express=require('express');
const { controllerRepairs }=require('../controller/workshop.controller')
const authMidellware=require('../midleware/auth.midellware')

const { existRepair }=require('../midleware/workshop.midlewares')
const userMidelware=require('../midleware/user.midelware')
const RouterW=express.Router();



RouterW.use(authMidellware.protect,authMidellware.protectEmployedAccountOwner)

RouterW.route('/')
    .get(controllerRepairs.findAllRepairs)
    .post(userMidelware.validExistUser ,controllerRepairs.createRepair)
RouterW.route('/:id')
    .get(existRepair, controllerRepairs.findOneRepair)
    .patch(existRepair, controllerRepairs.updateRepair)
    .delete(existRepair, controllerRepairs.deleteRepair)
    



module.exports=RouterW