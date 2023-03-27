const {DataTypes, STRING}= require('sequelize')
const { dbUsers, dbRepairs}=require('../database/config')

const User= dbUsers.define('users',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:'CLIENT'
    },
    status: {
        type: DataTypes.STRING,
        defaultValue:'AVAILABLE'
    }
})

const Repair= dbRepairs.define('users',{
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
    User,
    Repair,
}