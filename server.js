const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./archiver-bot/bot');
const mongoose = require('mongoose');
const config = require('./config/database');

//let Msg = require('./models/messages');

const app = express();

/*I gave you the tip, if you already know how to resolve a promise, 
and how to store in the database, just mix them both*/

//Connect db
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connection established');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.set('view-engine', 'pug');

app.get('/', (req, res) => {
    res.send('hello');
});

/*app.post('/addmsg', (req, res) => {
    bot = new Msg(req.body);
    msg.save()
        .then(item => {
            res.send();
        })
});*/

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});