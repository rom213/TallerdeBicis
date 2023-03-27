const {User,Repair}=require('../models/workshop.model')

const controllerUsers= {
  findAllUsers : async (req, res) => {
    const users=await User.findAll({
      where:{
        status:'AVAILABLE'
      }
    })
    res.status(200).json({
      status:'success',
      message: 'the query has been done success',
      users,
    });
  },
  
  createUser : async (req, res) => {
    const {
      name,
      email,
      password,
      role}=req.body
    
    const user=await User.create({
      name,
      email,
      password,
      role,
    })

    res.status(201).json({
      status:'success',
      message: 'Hello your product create success',
      user,
    });
  },
  
  updateUser : async (req, res) => {
    const { user }=req
    const {
      email,
      password,}=req.body

    await user.update({ email, password, })  
    res.status(200).json({
      status:'success',
      message: 'Hello From the patch update seccessful' 
    });
  },
  
  deleteUser : async (req, res) => {
    const { user }=req
    await user.update({
      status:'DISABLED'
    })
    res.status(200).json({
      message: 'delete product success',
    });
  },
  
  findOneUser : async (req, res) => {
    const {user}=req
    res.status(200).json({
      status:'success',
      message: 'one product',
      user,
    });
  },
  };

const controllerRepairs={
  findAllRepairs : async (req, res) => {
    const repair=await Repair.findAll({
      where:{
        status:'PENDING'
      }
    })
    res.status(200).json({
      status:'success',
      message: 'the query has been done success',
      repair,
    });
  },
  
  createRepair : async (req, res) => {
    const {
      date,
      userId,
      }=req.body
    
    const repair=await Repair.create({
      date,
      userId,
    })

    res.status(201).json({
      status:'success',
      message: 'Hello your product create success',
      repair,
    });
  },
  
  updateRepair : async (req, res) => {
    const { repair }=req
    const {
      status}=req.body
      
    await repair.update({ status })  

    res.status(200).json({
      status:'success',
      message: 'repair seccessful' 
    });
  },
  
  deleteRepair : async (req, res) => {
    const { repair }=req
    await repair.update({
      status:'CANCELED'
    })
    res.status(200).json({
      message: 'canceled the repair',
    });
  },
  
  findOneRepair : async (req, res) => {
    const {repair}=req
    res.status(200).json({
      status:'success',
      message: 'one product',
      repair,
    });
  },
  
}

module.exports={
  controllerUsers,
  controllerRepairs
}