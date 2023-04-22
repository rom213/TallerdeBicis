const { User} = require('../models/user.model');
const { Repair } = require('../models/workshop.model');
const catchAsync = require('../utils/catchAsync');

const controllerUsers = {
    findAllUsers: catchAsync( async (req, res) => {
      const users = await User.findAll({
        where: {
          status: 'AVAILABLE',
        },
        include:[
          {
            model:Repair,
          }
        ],
        
      });

      res.status(200).json({
        status: 'success',
        message: 'all users',
        users:users
      });
    }),
  
  
    updateUser: catchAsync( async (req, res) => {
      const { user } = req;
      const { email, password } = req.body;
  
      await user.update({ email, password });
      res.status(200).json({
        status: 'success',
        message:
          'Hello From the patch update seccessful',
      });
    }),
  
    deleteUser:  catchAsync( async (req, res) => {
      const { user } = req;
      await user.update({
        status: 'DISABLED',
      });
      res.status(200).json({
        message: 'delete User success',
      });
    }),
  
    findOneUser: catchAsync(async (req, res) => {
      const { user } = req;
      
      res.status(200).json({
        status: 'success',
        message: 'one product',
        user
      });
    }),
};

module.exports = {
    controllerUsers };