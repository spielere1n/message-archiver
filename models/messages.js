const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Msg = new Schema({
    message: String
});

module.exports = mongoose.model('Msg', Msg);