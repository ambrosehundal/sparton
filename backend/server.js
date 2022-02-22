const express = require('express');
const User = require('./models/User.js');
const cookieParser = require('cookie-parser');

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

app.use(cookieParser());


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


app.post('api/register', (req, res) => {
    const {email, password} = req.body;
    const currentUser = new User({ email, password });
    currentUser.save(err => {
        if(err){
            res.status(500).send("Error registering new user, please try again");
        }
        else{
            res.status(200).send("Successfully registered");
        }
    })

});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
});