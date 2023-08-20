const mongoose = require('mongoose');
const Schema = mongoose.Schema


const createUser = new Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        unqiue:true,
        required:true
    },
    password:{
        type:String,
        unqiue:true,
    },
    otp:{
        type:String
    }
})


const userDetails = mongoose.model('user', createUser);
module.exports = userDetails