const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./archiver-bot/bot');
const mongoose = require('mongoose');
const config = require('./config/database');

let Msg = require('./models/messages');

const app = express();

const port = process.env.PORT || 4000;

/*I gave you the tip, if you already know how to resolve a promise, 
and how to store in the database, just mix them both*/

//Connect db
mongoose.connect(config.database, {useMongoClient: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connection established');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

//Read
app.get('/', (req, res) => {
    res.render('index', {name: 'jjjff'});
    
    /*Msg.find((err, msg) => {
        if(err) {
            console.log(err);
        } else {
            res.json(msg);
        }
    });*/
});
//Create
/*app.post('/addmsg', (req, res) => {
    let msg = new Msg(req.body);
    msg.save()
        .then(msg => {
            res.status(200).json({'msg': 'added successfully'});
        })
        .catch(err => {
            res.status(400).send('Unable to add message');
        });
});*/
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