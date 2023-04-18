const { User} = require('../models/user.model');

const controllerUsers = {
    findAllUsers: async (req, res) => {
      const users = await User.findAll({
        where: {
          status: 'AVAILABLE',
        },
      });
      res.status(200).json({
        status: 'success',
        message: 'all users',
        users:users.map(user=>{
            return {
              user:user.name,
              email:user.email,
              role:user.role
            }
        })
      });
    },
  
  
    updateUser: async (req, res) => {
      const { user } = req;
      const { email, password } = req.body;
  
      await user.update({ email, password });
      res.status(200).json({
        status: 'success',
        message:
          'Hello From the patch update seccessful',
      });
    },
  
    deleteUser: async (req, res) => {
      const { user } = req;
      await user.update({
        status: 'DISABLED',
      });
      res.status(200).json({
        message: 'delete User success',
      });
    },
  
    findOneUser: async (req, res) => {
      const { user } = req;
      res.status(200).json({
        status: 'success',
        message: 'one product',
        user:{
          name:user.name,
          email:user.email,
          email:user.role
        },
      });
    },
};

module.exports = {
    controllerUsers
  };