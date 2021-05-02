var exports = module.exports = {};

const sheduleDayAnswersJunior = require("./sheduleDayAnswersJunior.js");
const constants = require("../constants/sheduleJunior.js");
const dateFormatter = require("./dateFormatter.js");
const mongoDate = require("./mongoDateFormatter.js");
const currentMonth = require("./currentMonthYearFormatter.js");
const Schedule = require('../models/schedule');
exports.send = async function (response) {
    const formattedDate = dateFormatter();
    const currentMongoDate = mongoDate();

    const scheduleDay = await Schedule.find({day: {$eq: currentMongoDate}});
    scheduleDay.each(function(err, result) {
        if (err) throw err;
        console.log(result);
    });

    const objDay = constants.SHEDULE_JUNIOR[formattedDate];

    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswersJunior.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswersJunior.good(response, formattedDate, objDay);
    }

    response.send(ansver);
}
