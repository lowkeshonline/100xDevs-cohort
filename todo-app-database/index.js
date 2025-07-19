const express = require('express');
const { userModel , todoModel } = require('./model.mongoose');
const connectToDB = require('./mongo.config');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const app = express();

connectToDB();

app.use(express.json());

function auth(req, res, next) {
    const { token } = req.headers;
    const decodedToken = JWT.verify(token , process.env.JWT_SECRET_KEY);
    const user = decodedToken.id;
    
    if(user){
        next();
    } else {
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }
}

app.post('/signup' , async (req,res) => {
    const { email , password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        console.log(hashedPassword);

        const user = await userModel.create({
            email : email,
            password : hashedPassword
        })

        res.json({
            message : "Database insertion succcesful",
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

        const compareRes = await bcrypt.compare(password, user.password);
        console.log(compareRes);

        if (compareRes) {
            const token = JWT.sign({ id : user._id.toString() }, process.env.JWT_SECRET_KEY);
            res.status(200).json({
                token : token
            })
        } else {
            res.status(403).json({
                message : "Wrong Credentials"
            })
        }
    } catch (err) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})

app.post('/todo' , auth , function(req,res) {
    res.json({
        message : "You are logged in"
    })
})

app.get('/todos' , auth, function(req,res) {
    
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port : " , process.env.PORT);
})