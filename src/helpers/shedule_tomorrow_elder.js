var exports = module.exports = {};


const constants = require("../constants/sheduleElder.js");
const sheduleDayAnswersElder = require("./sheduleDayAnswersElder.js");
const dateForrmater = require("./dateFormatter.js");

exports.send = function (response) {
    const formattedDate = dateForrmater(1);
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
