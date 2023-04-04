const {DataTypes, STRING}= require('sequelize')
const { db }=require('../database/config')



const Repair= db.define('repairs',{
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
    status: {
        type: DataTypes.STRING,
        defaultValue:'PENDING'
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})


module.exports = {
    Repair,
}