const { User } = require('../models/user.model');
const { Repair } = require('../models/workshop.model');
const catchAsync = require('../utils/catchAsync');



const controllerRepairs = {
  findAllRepairs: catchAsync( async (req, res) => {
    const repair = await Repair.findAll({
      where: {
        status: 'PENDING',
      },
      include:[
        {
          model:User,
          attributes:{exclude:['password','status','createdAt','updatedAt']}
        }
      ],
      attributes:{exclude:['createdAt','updatedAt']}
    });


    res.status(200).json({
      status: 'success',
      message: 'all repairs',
      repair,
    });
  }),

  createRepair:catchAsync(  async (req, res) => {
    const { date, userId } = req.body;

    const repair = await Repair.create({
      date,
      userId,
    });

    res.status(201).json({
      status: 'success',
      message:
        'Hello your product create success',
      repair,
    });
  }),

  updateRepair:catchAsync(  async (req, res) => {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });

    res.status(200).json({
      status: 'success',
      message: 'repair seccessful',
    });
  }),

  deleteRepair: catchAsync( async (req, res) => {
    const { repair } = req;
    await repair.update({
      status: 'CANCELED',
    });
    res.status(200).json({
      message: 'canceled the repair',
    });
  }),

  findOneRepair:catchAsync(async (req, res) => {
    const { repair } = req;
    res.status(200).json({
      status: 'success',
      message: 'one product',
      repair,
    });
  }),
};

module.exports = {
  controllerRepairs
};

