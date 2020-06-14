const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Trans = require('./model/schemaDB')
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/transDB', {
    useNewUrlParser: true
})
let check = new Trans({
    amount : 100,
    category : "food",
    vendor : "gazal"
})
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
    
})

// GET method route
app.get('/transactions', function (req, res) {
    Trans.find({}, function(err, found) {
           
             res.send(found)
                })
    
  })
  // POST method route
  app.post('/transaction', function (req, res) { 
      console.log(req.body)
    let p = new Trans({
        amount : req.body.amount,
       category :req.body.category,
       vendor : req.body.vendor,
      
    })
     
   p.save();
    res.send('POST request to the homepage')
  })
 //delete method route
  app.delete(`/transaction`,function(req,response){
     let {key}=req.body
     console.log( key)
    Trans.deleteOne({
        _id: key
    },
    
        function (request, res) {

            response.send("delete")
        })
  })



const port = 3200
app.listen(port, function () {
    console.log(`bank Server's UP, on port ${port}`)
})