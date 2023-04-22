const { User } = require("./user.model")
const { Repair } = require("./workshop.model")



const initModel=()=>{
    User.hasMany(Repair, {foreignKey:'userId'})
    Repair.belongsTo(User,{foreignKey:'userId'})
}

module.exports=initModel