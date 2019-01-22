const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./archiver-bot/bot');

const app = express();

app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});