const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require('./models/Users')

const app = express()
app.use(cors()) 
app.use(express.json())

mongoose.connect('mongodb+srv://emseccomandcenter:TUXnEN09VNM1drh3@cluster0.psiqanw.mongodb.net/?retryWrites=true&w=majority/test')

app.get('/getUsers', (req, res) => {
    Usermodel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+ err));
});


app.listen(3001,() => {
    console.log('Server is running on port 3001')
});