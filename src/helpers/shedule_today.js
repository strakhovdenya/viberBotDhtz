var exports = module.exports = {};

const sheduleDayAnswers = require("./sheduleDayAnswers.js");
const constants = require("./constants.js");

exports.send = function (response) {
    const date = new Date();

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