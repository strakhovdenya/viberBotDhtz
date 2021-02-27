'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const sheduleMonth = require('./helpers/shedule_month')
const loggerCreator = require('./helpers/logger')
const constants = require("./helpers/constants.js");

require('dotenv').config();

// const winston = require('winston');
// const toYAML = require('winston-console-formatter');


var request = require('request');

// function createLogger() {
//     const logger = new winston.Logger({
//         level: "debug" // We recommend using the debug level for development
//     });
//
//     logger.add(winston.transports.Console, toYAML.config());
//     return logger;
// }

function say(response, message) {
    response.send(new TextMessage(message));
}


const logger = loggerCreator.createLogger();


// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: process.env.BOT_ACCOUNT_TOKEN, // Learn how to get your access token at developers.viber.com
    name: "dhtz",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

bot.onError(err => logger.error(err));

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) => {
        onFinish(new TextMessage(`Hi, ${userProfile.name}! Nice to meet you.`))
    }
);

// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, `Sorry. I can only understand text messages.`);
    }
});


bot.onTextMessage(/./, (message, response) => {
    if (message.text === 'shedule_month') {
        sheduleMonth.send(response);
    } else {
        response.send(
            new TextMessage(`${response.userProfile.name} привет!!!!`, constants.OPTION_KEYBOARD),
        );
    }
});


const http = require('http');
const port = process.env.PORT || 8080;

http.createServer(bot.middleware()).listen(port, () => bot.setWebhook('https://viberhelperdhtz.herokuapp.com/'));

