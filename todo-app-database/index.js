const express = require('express');
const { userModel } = require('./model.mongoose');
const connectToDB = require('./mongo.config');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const app = express();

connectToDB();

app.use(express.json());

app.post('/signup' , async (req,res) => {
    const { email , password } = req.body;

    try {
        const user = await userModel.create({
            email : email,
            password : password
        })

        res.json({
            message : "Data insertion succcesful",
            data : user
        })

    } catch(err) {
        res.json({
            error : err.message
        })
    }
})

app.post('/signin' , async (req,res) => {
    const { email , password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user.email === email && user.password === password) {
            const token = JWT.sign({ id : user._id.toString() }, process.env.JWT_SECRET_KEY);
            res.status(200).json({
                token : token
            })
        } else {
            res.status(403).json({
                message : "User not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})

app.post('/todo' , function(req,res) {
    
})

app.get('/todos' , function(req,res) {
    
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port : " , process.env.PORT);
})