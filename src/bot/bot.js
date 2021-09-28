import createLogger from "../helpers/logger.js";
import * as Bot from "viber-bot";
import sheduleMonthJunior from "../helpers/shedule_month_junior.js";
import sheduleMonthElder from "../helpers/shedule_month_elder.js";
import sheduleTodayJunior from "../helpers/shedule_today_junior.js";
import sheduleTomorrowJunior from "../helpers/shedule_tomorrow_junior.js";
import sheduleTodayElder from "../helpers/shedule_today_elder.js";
import sheduleTomorrowElder from "../helpers/shedule_tomorrow_elder.js";
import {con as constants} from "../helpers/constants.js";
import {} from 'dotenv/config.js';


function say(response, message) {
    response.send(new Bot.Message.Text(message));
}

const logger = createLogger();

// Creating the bot with access token, name and avatar
const bot = new Bot.Bot(logger, {
    authToken: process.env.BOT_ACCOUNT_TOKEN, // Learn how to get your access token at developers.viber.com
    name: "dhtz",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
    // avatar: "data:image/png;base64,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" // Just a placeholder avatar to display the user
});

bot.onError(err => logger.error(err));

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) => {
        onFinish(new Bot.Message.Text(`Hi, ${userProfile.name}! Nice to meet you.`))
    }
);

// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});


bot.on("message", (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof Bot.Message.Text)) {
        say(response, `Sorry. I can only understand text messages.`);
    }
});


bot.onTextMessage(/./, (message, response) => {

    // delete duplicate messages when heroku start
    if (process.env.MSG_TOKEN === message.token) {
        return;
    }

    if (typeof process.env.MSG_TOKEN === 'undefined') {
        process.env.MSG_TOKEN = message.token;
    }

    if (message.text === 'shedule_month_junior') {
        sheduleMonthJunior.send(response);
    } else if (message.text === 'shedule_month_elder') {
        sheduleMonthElder.send(response);
    } else if (message.text === 'shedule_today_junior') {
        sheduleTodayJunior.send(response);
    } else if (message.text === 'shedule_tomorrow_junior') {
        sheduleTomorrowJunior.send(response);
    } else if (message.text === 'shedule_today_elder') {
        sheduleTodayElder.send(response);
    } else if (message.text === 'shedule_tomorrow_elder') {
        sheduleTomorrowElder.send(response);
    } else if (message.text === 'junior') {
        response.send(new Bot.Message.Text(`${response.userProfile.name} вот меню для младших`, constants.OPTION_KEYBOARD_JUNIOR));
    } else if (message.text === 'elder') {
        response.send(new Bot.Message.Text(`${response.userProfile.name} вот меню для старших`, constants.OPTION_KEYBOARD_ELDER));
    } else if (message.text === 'start') {
        console.log(Bot)
        response.send(new Bot.Message.Text(`${response.userProfile.name} привет!!!!`, constants.OPTION_KEYBOARD_START));
    } else {
        response.send(new Bot.Message.Text(`${response.userProfile.name} привет!!!!`, constants.OPTION_KEYBOARD_START));
    }
});

export default bot;