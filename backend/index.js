const express = require('express')

const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const category=require('./routes/category')
const dotenv=require('dotenv').config()
connectDB()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/',category)

const port = 5000

app.listen(port, () => {
    console.log('server is listening');
})