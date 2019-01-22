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

    if(command === 'archive') {
        message.channel.fetchMessage(args[0])
            .then(message =>  {
                /*message is already a resolved promise, why are you resolving it again?
                also, don't use the same name in your then event as in the message event
                change it to msg or fetchedMessage or something else and then do everything, 
                including saving the content to your db, inside the then event*/

                console.log(message.content);

                let msg = new Msg();
                msg.message = message.content;
                msg.save((err) => {
                    if(err) {
                        return handleError(err);
                    } else {
                        console.log('success');
                    }
                });
            })
            .catch(console.error);

        message.reply('Message successfully archived');
    }

    if(command === 'shane'){
        message.reply('Shane sucks and is bad at everything');
    }
});

bot.login(config.token);
}

module.exports = archiver();