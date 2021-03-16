var exports = module.exports = {};


const constants = require("./constants.js");
const sheduleDayAnswersJunior = require("./sheduleDayAnswersJunior.js");
const dateForrmater = require("./dateForrmater.js");

exports.send = function (response) {
    const formattedDate = dateForrmater(1);
    const objDay = constants.SHEDULE_JUNIOR[formattedDate];

    let text;
    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswersJunior.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswersJunior.good(response, formattedDate, objDay);
    }



    response.send(ansver);
}