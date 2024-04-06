/* This file will start server */
const express = require('express')
const cors=require('cors')
const mongoose = require('mongoose');
const url=require('./config/url.config')
const port=require('./config/port.config')
const app=express(); 

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json()) //middle ware to covert data into json format

//  connect to the mongo db 
mongoose.connect(url.dbUrl)
const db=mongoose.connection; 

db.on('error' , ()=>{
    console.log("DB not connected")
})

db.once('open',()=>{
    console.log("DB connected")
})

// sitch route to the server file  
require('./routes/auth.routes')(app);

/**
 * Server is running
 */
app.listen(port.PORT , () =>{
    console.log(`server is running on ${port.PORT}`)
})
