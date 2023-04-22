const { User } = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


exports.validExistUser=catchAsync(async(req, res, next)=>{
    const { userId }=req.body
    const user= await User.findOne({
        where:{
            status:'AVAILABLE',
            id:userId,
        }

    })
    if (!user) {
        return next( new AppError('user not found',404))
    }

    next()

})