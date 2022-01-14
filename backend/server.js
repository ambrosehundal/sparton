
const mongoose = require('mongoose');

const mongoDbUri = 'mongodb://localhost/react-authentication';


mongoose.connect(mongoDbUri, function(err){
    if(err){
        throw err;
    } else {
        console.log(`Successfully connected to ${mongoDbUri}`);
    }
});