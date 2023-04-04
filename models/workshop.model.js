const {DataTypes, STRING}= require('sequelize')
const {dbRepairs}=require('../database/config')



const Repair= dbRepairs.define('repairs',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue:'PENDING'
    },
    userId:{
        type: DataTypes.NUMBER,
        allowNull: false,
    }
})


module.exports = {
    Repair,
}