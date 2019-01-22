const discord = require('discord.js');
const bot = new discord.Client();
const config = require('./config.json');
const mongoose = require('mongoose');

//stackoverflow question link
//https://stackoverflow.com/questions/54305283/how-to-store-message-contents?noredirect=1#comment95432404_54305283

let Msg = require('../models/messages');

function archiver() {

bot.on('ready', () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels`);
});

bot.on('message', (message) => {
    const channel = bot.channels.get('537131544821628929');
    const args = message.content.slice(config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    let msg = new Msg(message.content);

    if(command === 'archive') {
        channel.fetchMessage(args[0])
        msg.save()
            .then(message =>  {
                //Promise.resolve(message)
                console.log(message.content);
            })
            .catch(console.error);
        //let json = JSON.parse(dm);
        //console.log(json);
        //Promise.resolve(dm);
        
        /*msg.save()
            .then(json => {
                console.log('success');
            })
            .catch(err => {
                console.log(err);
            });*/

        message.reply('Message successfully archived');
    }

    if(command === 'shane'){
        message.reply('Shane sucks and is bad at everything');
    }
});

bot.login(config.token);
}

module.exports = archiver();