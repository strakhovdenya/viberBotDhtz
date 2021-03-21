var exports = module.exports = {};

const sheduleDayAnswersElder = require("./sheduleDayAnswersElder.js");
const constants = require("../constants/sheduleElder.js");
const dateForrmater = require("./dateForrmater.js");

exports.send = function (response) {
    const formattedDate = dateForrmater();
    const objDay = constants.SHEDULE_ELDER[formattedDate];

    let text;
    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswersElder.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswersElder.good(response, formattedDate, objDay);
    }

    response.send(ansver);
}