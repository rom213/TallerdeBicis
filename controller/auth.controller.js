const { User } = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require("../utils/catchAsync");
const generateJWT = require("../utils/jwt");
const bcrypt = require('bcryptjs');

exports.signup = catchAsync(async (req, res, next) => {
    const { name, email, password, role } = req.body;
  
    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(password, salt);
  
    const user = await User.create({
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: encryptedPassword,
        role,
    }) ;
  
    const token = await generateJWT(user.id);
  
    res.status(201).json({
      status: 'success',
      message: 'The user has been created succesfully!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  });

exports.login= catchAsync(async(req,res,next)=>{
    const {email, password}=req.body

    const user= await User.findOne({
        where:{
            email:email.toLowerCase(),
            status:'AVAILABLE',
        }
    })

    

if (!user) {
    return next(new AppError('Incorrect email or password',401))
}


if (!(await bcrypt.compare(password,user.password))) {
    return next(new AppError('Incorrect email or password'))
}

const token = await generateJWT(user.id)

res.status(200).json({
    status:'success',
    token,
    user:{
        id:user.id,
        name:user.name,
        email:user.email,
        user:user.role
    }
})

})