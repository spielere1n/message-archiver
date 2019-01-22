const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./archiver-bot/bot');
const mongoose = require('mongoose');
const config = require('./config/database');

let Msg = require('./models/messages');

const app = express();

const port = process.env.PORT || 4000;

//Connect db
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connection established');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

//Read
app.get('/', (req, res) => {
    Msg.find((err, msg) => {
        if(err) {
            console.log(err);
        } else {
            res.json(msg);
        }
    });
});

//Delete
app.get('/delete/:id', (req, res) => {
    Msg.findByIdAndRemove({_id: req.params._id}, (err, msg) => {
        if(err) {
            res.json(err);
        } else {
            res.json('Successfully removed');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});