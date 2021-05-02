var exports = module.exports = {};

const sheduleDayAnswersJunior = require("./sheduleDayAnswersJunior.js");
const constants = require("../constants/sheduleJunior.js");
const dateFormatter = require("./dateFormatter.js");
const Schedule = require('../models/schedule');
exports.send = async function (response) {
    const formattedDate = dateFormatter();

    const scheduleDay = await Schedule.find({data: {$eq: formattedDate}});

    let [objDay] =  scheduleDay;
    console.log(objDay);

     objDay = constants.SHEDULE_JUNIOR[formattedDate];

    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = sheduleDayAnswersJunior.bad(response, formattedDate, objDay);
    } else {
        ansver = sheduleDayAnswersJunior.good(response, formattedDate, objDay);
    }

    response.send(ansver);
}
