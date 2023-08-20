'use strict';

const express = require( 'express');
var cors = require( 'cors');
const app = express();

const bodyparser = require('body-parser') ;
app.use(bodyparser . urlencoded ({
extended:true, limit: '10200kb'
}));

app.use (bodyparser.json ()) ; 
const { db } = require('./app/model') 
db.mongoose;
app.use(cors());
// app.use(express.static('C: /Project/test'));
require('./app/router')(app);

app.listen(9006, () => {
    console.log('Server is running at port 9006')
})