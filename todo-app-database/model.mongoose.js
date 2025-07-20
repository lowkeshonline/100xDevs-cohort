const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;


const userSchema = new mongoose.Schema({
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

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    done : {
        type : Boolean,
        required : true
    },
    userId : {
        type : ObjectID,
        required : true
    }
})

const userModel = mongoose.model('users', userSchema);
const todoModel = mongoose.model('todos', todoSchema);

module.exports = {
    userModel : userModel,
    todoModel : todoModel
}