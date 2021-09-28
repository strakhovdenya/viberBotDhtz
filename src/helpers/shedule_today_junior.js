

import {bad,good} from "./sheduleDayAnswersJunior.js";
import dateFormatter from "./dateFormatter.js";
import {ScheduleJunior} from "../models/schedule.js";
const send = async function (response) {
    let ansver;
    const formattedDate = dateFormatter();
    const scheduleDay = await ScheduleJunior.find({data: {$eq: formattedDate}});

    let [objDay] = scheduleDay;

    // if (typeof objDay === 'undefined') {
    //     objDay = constants.SHEDULE_JUNIOR[formattedDate];
    // }
    // objDay = constants.SHEDULE_JUNIOR[formattedDate];


    if (typeof objDay === 'undefined') {
        ansver = bad(response, formattedDate, objDay);
    } else {
        ansver = good(response, formattedDate, objDay);
    }

    response.send(ansver);
}

export default send;
