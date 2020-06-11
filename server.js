const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

app.use(express.static(path.join(__dirname, './')));

//  app.get('/',(req,res) => {
// //     res.send('index.html');

//  })

app.get('/api/products',(req,res) => {
  db.readJSON(path.join(__dirname, './products.json')) 
   .then(data => {
        console.log(data)
        res.send(data);
    })
 })

app.listen(3000,()=> console.log('server is running '));