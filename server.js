const express = require('express')

const app = express()
const cors=require('cors')
app.use(cors())

require('dotenv').config()
app.use(express.json())
const database=require('./config/database')
const Route=require('./router/authRoute')

database()

app.use('/',Route)

const PORT = process.env.PORT || 8001

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})