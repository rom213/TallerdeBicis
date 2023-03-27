const {User,Repair}=require('../models/workshop.model')

exports.existUser=async (req,res,next)=>{
    const { id }=req.params
    const user= await User.findOne({
        where:{
            status:'AVAILABLE',
            id,
        }
    });

    if (!user) {
        return res.status(404).json({
            status:'error',
            messaje:'User not found',
        })
    }

    req.user=user;
    next();
}

exports.existRepair=async (req,res,next)=>{
    const { id }=req.params
    const user= await User.findOne({
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
    if (!user) {
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
}




