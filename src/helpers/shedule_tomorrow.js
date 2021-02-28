var exports = module.exports = {};


const constants = require("./constants.js");
const sheduleDayAnswers = require("./sheduleDayAnswers.js");
const dateForrmater = require("./dateForrmater.js");

exports.send = function (response) {
    const formattedDate = dateForrmater(1);
    const objDay = constants.SHEDULE[formattedDate];

    let text;
    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswers.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswers.good(response, formattedDate, objDay);
    }



    response.send(ansver);
}