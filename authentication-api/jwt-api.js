//User auth api using Express & JWT


const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

const JWT_SECRET = "elaunnavrababu";

const users = [];

const courses = [
  {
    "id": 1,
    "title": "Introduction to JavaScript",
    "instructor": "John Doe",
    "duration": "4 weeks",
    "level": "Beginner",
    "price": 499,
    "category": "Web Development"
  },
  {
    "id": 2,
    "title": "Advanced React",
    "instructor": "Jane Smith",
    "duration": "6 weeks",
    "level": "Advanced",
    "price": 799,
    "category": "Frontend"
  },
  {
    "id": 3,
    "title": "Python for Data Science",
    "instructor": "Ravi Kumar",
    "duration": "8 weeks",
    "level": "Intermediate",
    "price": 999,
    "category": "Data Science"
  },
  {
    "id": 4,
    "title": "Machine Learning Basics",
    "instructor": "Ayesha Rahman",
    "duration": "10 weeks",
    "level": "Beginner",
    "price": 1199,
    "category": "AI/ML"
  }
]

app.use(express.json());

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
    const password = req.body.password;

    const validUser = users.find(u => u.username === username && password === password);

    if(validUser) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);
        res.status(200).json(token);
    } else {
        res.status(403).json({message : "Invalid Login Credentials"});
    }
});

app.get('/courses' , (req,res) => {
    const token = req.headers.token;
    
    const decoded = jwt.verify(token , JWT_SECRET);
    const username = decoded.username;

    const loggedInUser = users.find(u => u.username === username);

    if(loggedInUser) {
        res.status(200).json(loggedInUser);
    } else {
        res.status(403).json({message : "Invalid json"});
    }
})

app.listen(PORT);
