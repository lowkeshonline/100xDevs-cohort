//User auth api using Express & JWT


const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

const JWT_SECRET = "elaunnavrababu";

const courses = { 
    "id": 1,
    "title": "Introduction to JavaScript",
    "instructor": "John Doe",
    "duration": "4 weeks",
    "level": "Beginner",
    "price": 499,
    "category": "Web Development"
  }


app.use(express.json());

function authCheck(req, res, next) {

    const token = req.headers.token;
    const decodedToken = jwt.verify(token, JWT_SECRET);
    
    if(decodedToken) {
        req.username = true;
    }
    next();
}

app.get('/' , (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userDoesExist = users.find(u => u.username === username);

    if(userDoesExist){
        res.status(403).json({message : "User already exists"});
    } else {
        users.push({
        username : username,
        password : password
    })

        res.status(200).json(users);
    }
});

app.post('/signin', (req,res) => {
    const username = req.body.username;

    if(username) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);
        res.status(200).json({ token });
    } else {
        res.status(403).json({message : "Invalid Login Credentials"});
    }
});

app.get('/courses' , authCheck , (req,res) => {

    if(req.username) {
        res.status(200).json(courses);
    } else {
        res.status(403).json({message : "Invalid token"});
    }
})

app.listen(PORT);
