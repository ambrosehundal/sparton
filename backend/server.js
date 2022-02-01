const express = require('express');

const mongoose = require('mongoose');

const mongoDbUri = 'mongodb://localhost/react-authentication';


const app = express();

mongoose.connect(mongoDbUri, function(err){
    if(err){
        throw err;
    } else {
        console.log(`Successfully connected to ${mongoDbUri}`);
    }
});


app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })