// Authentication api using generic in-memory token

const express = require('express');
const PORT = 3000;
const app = express();

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

function generateToken() {
    let token;
    const characters = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            '0','1','2','3','4','5','6','7','8','9'
        ];

        for(let i = 0; i <= 32; i++){
            token += characters[(Math.floor(Math.random() * 10))]
        }
        return token;
}

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
        const token = generateToken();

        validUser.token = token;
        res.status(200).json(validUser);
    } else {
        res.status(403).json({message : "Invalid Login Credentials"});
    }
});


app.get('/courses', (req,res) => {
    const token = req.headers.token;

    const userWithToken = users.find(u => u.token === token);

    if(userWithToken.token === token) {
        res.status(200).json(courses);
    } else {
        res.status(403).json(userWithToken);
    }
});


app.listen(3000);