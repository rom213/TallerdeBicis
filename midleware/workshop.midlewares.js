const { Repair }=require('../models/workshop.model')
const { User }=require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.existUser=catchAsync(async (req,res,next)=>{
    const { id }=req.params
    const user= await User.findOne({
        where:{
            status:'AVAILABLE',
            id,
        },
        include:[
            {
                model:Repair
            }
        ],
        attributes:{exclude:['password','status']}
    });

    if (!user) {
        return res.status(404).json({
            status:'error',
            messaje:'User not found',
        })
    }

    req.user=user;
    next();
})

exports.existRepair=catchAsync(async (req,res,next)=>{
    const { id }=req.params
    const client= await User.findOne({
        where:{
            status:'AVAILABLE',
            role:'CLIENT',
        }
    });

    const repair= await Repair.findOne({
        where:{
            status:'AVAILABLE',
            id,
        }
    });
    if (!client) {
        return res.status(404).json({
            status:'error',
            messaje:'User not found',
        })
    }

    if (!repair) {
        return res.status(404).json({
            status:'error',
            messaje:'repair not found',
        })
    }


    req.repair=repair;
    next();
})




