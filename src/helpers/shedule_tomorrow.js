var exports = module.exports = {};


const constants = require("./constants.js");
const sheduleDayAnswers = require("./sheduleDayAnswers.js");

exports.send = function (response) {
    const date = new Date();

    date.setDate(date.getDate() + 1);

    const day = date.getDate();
    const dayForatted = (day < 10 ? '0' : '') + day;

    const month = date.getMonth() + 1;
    const monthForatted = (month < 10 ? '0' : '') + month;

    const formattedDate = dayForatted + '.' + monthForatted + '.' + date.getFullYear();

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