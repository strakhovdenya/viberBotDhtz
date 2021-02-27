'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
var logger = require("./logger.js");

require('dotenv').config();

const winston = require('winston');
const toYAML = require('winston-console-formatter');
const ngrok = require('./get_public_url');

var request = require('request');



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




// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: process.env.BOT_ACCOUNT_TOKEN, // Learn how to get your access token at developers.viber.com
    name: "dhtz",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

bot.onError(err => logger.log(err));


// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) => {
        onFinish(new TextMessage(`Hi, ${userProfile.name}! Nice to meet you.`))
    }
);

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
            "Text": "Рассписание на февраль",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "shedule_month"
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

    if (message.text === 'shedule_month') {
        response.send([
                new PictureMessage('https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614417847/dhtz/shedule_feb_kfncaw.jpg', null, 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614417847/dhtz/shedule_feb_kfncaw.jpg'),
                new TextMessage(`${response.userProfile.name} \r\n лови рассписание на месяц`, OPTION_KEYBOARD),
            ]
        );
    } else {
        response.send(
            new TextMessage(`${response.userProfile.name} привет!!!!`, OPTION_KEYBOARD),
        );
    }


});


const http = require('http');
const port = process.env.PORT || 8080;

http.createServer(bot.middleware()).listen(port, () => bot.setWebhook('https://viberhelperdhtz.herokuapp.com/'));

// 01.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 02.02.2021	  	 	                            18.45 - 20.00	18.30
// 03.02.2021	 	 	                            18.45 - 20.00	18.30
// 04.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 05.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 06.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 07.02.2021	06.15 - 07.45	Салтівський лід	 	                06.00
// 08.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 09.02.2021	 	 	                            18.45 - 20.00   18.30
// 10.02.2021	 	 	                            18.45 - 20.00   18.30
// 11.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 12.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 13.02.2021	20.30 - 21.30	Палац Спорту	   	                19.45
// 14.02.2021	06.15 - 07.45	Салтівський лід	 	                06.00
// 15.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 16.02.2021	  	 	                            18.45 - 20.00	18.30
// 17.02.2021	 	 	                            18.45 - 20.00	18.30
// 18.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 19.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 20.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 21.02.2021	06.15 - 07.45	Салтівський лід	 	                06.00
// 22.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 23.02.2021	 	 	                            18.45 - 20.00	18.30
// 24.02.2021	 	 	                            18.45 - 20.00	18.30
// 25.02.2021	20.30 - 21.30	Палац Спорту	 	                19.45
// 26.02.2021	21.00 - 22.00	Палац Спорту	 	                20.15
// 27.02.2021	20.30 - 21.30	Палац Спорту	  	                19.45
// 28.02.2021	06.15 - 07.45	Салтівський лід	   	                06.00