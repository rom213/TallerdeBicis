const { Sequelize }=require('sequelize')


const dbUsers= new Sequelize({
    dialect:process.env.DB_DIALECT,
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    logging:false, 
    })
    
const dbRepairs= new Sequelize({
        dialect:process.env.DB_DIALECT,
        host:process.env.DB_HOST,
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE2,
        port:process.env.DB_PORT,
        logging:false, 
    })
    

    module.exports={ dbUsers, dbRepairs }