const express = require('express');

const mongoose = require('mongoose');

const mongoDbUri = 'mongodb://localhost/react-authentication';

// mongoose.connect(mongoDbUri, function(err){
//     if(err){
//         throw err;
//     } else {
//         console.log(`Successfully connected to ${mongoDbUri}`);
//     }
// });


const app = express();


app.get('/api/home', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const message = "You will make the best MMA site in the world";
    res.send(JSON.stringify(message));
});

app.get('/api/courses', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const message = "Learn Wrestling, Jujitsu, Taekwondo, anything"
    res.send(JSON.stringify(message));
});
  
app.get('/', (req, res) => {
    res.send('Best MMA online course in the world!')
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
});