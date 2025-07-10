const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = mongoose.ObjectID;


const User = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const Todo = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    done : {
        type : Boolean,
        required : true
    },
    id : {
        type : ObjectID,
        required : true
    }
})

const userModel = mongoose.model('users', User);