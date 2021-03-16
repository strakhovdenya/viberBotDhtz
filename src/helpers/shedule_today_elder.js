var exports = module.exports = {};

const sheduleDayAnswers = require("./sheduleDayAnswers.js");
const constants = require("./constants.js");
const dateForrmater = require("./dateForrmater.js");

exports.send = function (response) {
    const formattedDate = dateForrmater();
    const objDay = constants.SHEDULE_JUNIOR[formattedDate];

    let text;
    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswers.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswers.good(response, formattedDate, objDay);
    }

    response.send(ansver);
}