const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require('./models/Users')

const app = express()
app.use(cors()) 
app.use(express.json())

// mongoose.connect('mongodb+srv://emseccomandcenter:TUXnEN09VNM1drh3@cluster0.psiqanw.mongodb.net/?retryWrites=true&w=majority/test')
mongoose.connect('mongodb+srv://rk399504:RqUsjKF0kvlIQmfy@blog-app.nqyjm.mongodb.net/?retryWrites=true&w=majority&appName=Blog-app/testing')

app.get('/getUsers', (req, res) => {
    Usermodel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+ err));
});

app.get('/data', (req, res) => {
    return res.json({service: "Running"})
});


app.listen(3001,() => {
    console.log('Server is running on port 3001')
});