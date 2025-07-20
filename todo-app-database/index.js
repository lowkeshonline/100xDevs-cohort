const express = require('express');
const { userModel , todoModel } = require('./model.mongoose');
const connectToDB = require('./mongo.config');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { z } = require('zod');
const app = express();

connectToDB();

app.use(express.json());

function auth(req, res, next) {
    const { token } = req.headers;
    const decodedToken = JWT.verify(token , process.env.JWT_SECRET_KEY);
    
    
    if(decodedToken){
        req.body.userId = decodedToken.id;
        next();
    } else {
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }
}

app.post('/signup' , async (req,res) => {
    const requiredBody = z.object({
        email : z.string().min(3).email(),
        password : z.string().max(20)
    })

    const parsedData = requiredBody.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message : "Incorrect format of data"
        })
    }

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

app.post('/todo' , auth , async function(req,res) {
    const userId = req.body.userId;
    const title = req.body.title;
    const done = req.body.done;
    console.log(userId);
    await todoModel.create({
        title : title,
        done : done,
        userId : userId
    })
    res.json({
        userId : userId
    })
})

app.get('/todos' , auth, async function(req,res) {
    const userId = req.body.userId;
    const todos = await todoModel.find({
        userId : userId
    })
    console.log(todos);
    res.json({
        todos
    })
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port : " , process.env.PORT);
})