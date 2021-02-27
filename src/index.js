'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
require('dotenv').config();

const winston = require('winston');
const toYAML = require('winston-console-formatter');
const ngrok = require('./get_public_url');

var request = require('request');

function createLogger() {
    const logger = new winston.Logger({
        level: "debug" // We recommend using the debug level for development
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}

function say(response, message) {
    response.send(new TextMessage(message));
}

// function checkUrlAvailability(botResponse, urlToCheck) {
//
//     if (urlToCheck === '') {
//         say(botResponse, 'I need a URL to check');
//         return;
//     }
//
//     say(botResponse, 'One second...Let me check!');
//
//     var url = urlToCheck.replace(/^http:\/\//, '');
//     request('http://isup.me/' + url, function(error, requestResponse, body) {
//         if (error || requestResponse.statusCode !== 200) {
//             say(botResponse, 'Something is wrong with isup.me.');
//             return;
//         }
//
//         if (!error && requestResponse.statusCode === 200) {
//             if (body.search('is up') !== -1) {
//                 say(botResponse, 'Hooray! ' + urlToCheck + '. looks good to me.');
//             } else if (body.search('Huh') !== -1) {
//                 say(botResponse, 'Hmmmmm ' + urlToCheck + '. does not look like a website to me. Typo? please follow the format `test.com`');
//             } else if (body.search('down from here') !== -1) {
//                 say(botResponse, 'Oh no! ' + urlToCheck + '. is broken.');
//             } else {
//                 say(botResponse, 'Snap...Something is wrong with isup.me.');
//             }
//         }
//     })
// }

const logger = createLogger();

// if (!process.env.VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY) {
//     logger.debug('Could not find the Viber account access token key in your environment variable. Please make sure you followed readme guide.');
//     return;
// }

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: process.env.BOT_ACCOUNT_TOKEN, // Learn how to get your access token at developers.viber.com
    name: "dhtz",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

bot.onError(err => logger.error(err));

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

const OPTION_KEYBOARD = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на месяц",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "Late"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на сегодня",
            "ActionType": "reply",
            "ActionBody": "DayOff"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на завтра",
            "ActionType": "reply",
            "ActionBody": "HalfDayOff"
        }
    ]
};
bot.onTextMessage(/./, (message, response) => {
    // checkUrlAvailability(response, message.text);

    if (message.text === 'Late') {
        response.send([
                new TextMessage(`${response.userProfile.name} лови рассписание на месяц`, OPTION_KEYBOARD),
                new PictureMessage('https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614416905/dhtz/hockey-logo-vector_20448-291_cbutce.jpg', null, 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614416905/dhtz/hockey-logo-vector_20448-291_cbutce.jpg'),
                new TextMessage(`${response.userProfile.name} лови рассписание на месяц`, OPTION_KEYBOARD),
            ]
        );
    } else {
        response.send(
            new TextMessage(`${response.userProfile.name} привет!!!!`, OPTION_KEYBOARD),

            // new PictureMessage('https://git.heroku.com/viberhelperdhtz.git/src/images/hockey-logo-vector_20448-291.jpg', null, 'https://git.heroku.com/viberhelperdhtz.git/src/images/hockey-logo-vector_20448-291.jpg'),

            // new RichMediaMessage(DAY_BUTTONS);
        );
    }


});


if (true) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook('https://viberhelperdhtz.herokuapp.com/'));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Trying to use the local ngrok server.');
    return ngrok.getPublicUrl().then(publicUrl => {
        const http = require('http');
        const port = process.env.PORT || 8080;

        http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

    }).catch(error => {
        console.log('Can not connect to ngrok server. Is it running?');
        console.error(error);
        process.exit(1);
    });
}
