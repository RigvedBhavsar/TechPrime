const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://rigved:rigved@cluster0.lboig.gcp.mongodb.net/TechPrime?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected to MongoDB Atlas...')
})

app.use(express.json())

const Router = require('./routes/api')
app.use('/product',Router)

app.listen(3000, () => {
    console.log('Server started')
})