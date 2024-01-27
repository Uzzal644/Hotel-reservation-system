const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://hello:hello@cluster0.da3jy5o.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection successful')
})

module.exports = mongoose