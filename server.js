require('dotenv').config();
const app=require('./app')
const { dbUsers, dbRepairs  }=require('./database/config')

dbRepairs.authenticate('')
    .then(()=>{
      console.log('database Reapirs Autenticate 🤩')
    })
    .catch((err)=>console.log(err))
dbRepairs.sync()
    .then(()=>console.log('database Repairs since'))
    .catch((err)=>console.log(err))

dbUsers.authenticate('')
    .then(()=>{
      console.log('database Autenticate 🤩')
    })
    .catch((err)=>console.log(err))
dbUsers.sync()
    .then(()=>console.log('database user since'))
    .catch((err)=>console.log(err))

const port=3000
app.listen(port, ()=>{
  console.log(`App running on port ${port}...`)
})