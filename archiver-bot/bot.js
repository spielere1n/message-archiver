const discord = require('discord.js');
const bot = new discord.Client();
const config = require('./config.json');
const mongoose = require('mongoose');

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