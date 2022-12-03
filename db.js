const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://bhagath:bhagath123@cluster0.wbuhdjy.mongodb.net/tourism'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose