const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      auth0strategy = require('passport-auth0'),
      session = require('express-session'),
      path = require('path');

const app = express();
const port = 4200;
app.use(cors());
app.use(bodyParser.json());


massive({
    host: 'ec2-54-221-254-72.compute-1.amazonaws.com',
    post: 5432,
    database: 'daf3cs7l8qobou',
    user: 'krkmuweurdkppz',
    password: 'b4f330aec1793cc2a26e1693beed67729572480566d4411c4ea2bc620cc225f3',
    ssl:true
}).then(function(db){
    app.set('db', db)
})

app.get('/teachers', (req,res) => {
    app.get('db').getTeachers()
    .then(response => {
        res.status(200).send(response)
    })
})

app.get('/students', (req,res) => {
    app.get('db').getStudents()
    .then(response => {
        res.status(200).send(response)
        console.log('students' + response);
        
    })
})

  



app.listen(port, () => console.log("I'm lookin at you!"))
