const db = require('./db');
const userDetails = require('./authr/createUser')
const userLoginDetails = require('./authr/login')


module.exports= { 
    db,
    userDetails,
    userLoginDetails
}