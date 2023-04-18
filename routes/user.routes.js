const express=require('express');
const { controllerUsers }=require('../controller/user.controller')


const authMidellware=require('../midleware/auth.midellware')
const { existUser }=require('../midleware/workshop.midlewares')

const RouterU=express.Router();

RouterU.use(authMidellware.protect)

RouterU.route('/')
    .get(controllerUsers.findAllUsers)
RouterU.route('/:id')
    .get(existUser, controllerUsers.findOneUser)


    .patch(existUser,authMidellware.protectAccountOwner, controllerUsers.updateUser)
    .delete(existUser,authMidellware.protectAccountOwner, controllerUsers.deleteUser)
    




module.exports=RouterU