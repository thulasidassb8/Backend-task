const mongoose = require('mongoose');


async function databaseconnection(){
    try {
       const host = 'localhost';
       const port = 27017;
       const userName = 'thulasidass04';
       const password  = 'hbU8RpYt272A286g';
       const dbName = 'Task';
       
       
       const result = await mongoose.connect('mongodb+srv://thulasidass04:hbU8RpYt272A286g@cluster0.p3rry3h.mongodb.net/Task',{
        useNewUrlParser:true
       })

       if(result){
        return console.log('Database Successfully Connected')
       }
       console.log('Database Not Connected')
    } catch (error) {
        console.log(error)
    }
}


databaseconnection();
const db = mongoose.connection;
module.exports = db;