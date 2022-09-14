require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express()   
const router = require('./src/modules')

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(5000, console.log(5000))