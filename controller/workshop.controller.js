const { Repair} = require('../models/workshop.model');



const controllerRepairs = {
  findAllRepairs: async (req, res) => {
    const repair = await Repair.findAll({
      where: {
        status: 'PENDING',
      },
    });
    res.status(200).json({
      status: 'success',
      message: 'all repairs',
      repair,
    });
  },

  createRepair: async (req, res) => {
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
  },

  updateRepair: async (req, res) => {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });

    res.status(200).json({
      status: 'success',
      message: 'repair seccessful',
    });
  },

  deleteRepair: async (req, res) => {
    const { repair } = req;
    await repair.update({
      status: 'CANCELED',
    });
    res.status(200).json({
      message: 'canceled the repair',
    });
  },

  findOneRepair: async (req, res) => {
    const { repair } = req;
    res.status(200).json({
      status: 'success',
      message: 'one product',
      repair,
    });
  },
};

module.exports = {
  controllerRepairs
};

