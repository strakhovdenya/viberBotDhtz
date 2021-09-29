import {bad,good} from "./sheduleDayAnswersJunior.js";
import dateFormatter from "./dateFormatter.js";
import {ScheduleJunior} from "../models/schedule.js";

const send = async function (response) {
    const formattedDate = dateFormatter(1);
    const scheduleDay = await ScheduleJunior.find({data: {$eq: formattedDate}});

    let [objDay] = scheduleDay;

    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = bad(response, formattedDate, objDay);
    } else {
        ansver = good(response, formattedDate, objDay);
    }

    response.send(ansver);
}

export default send;
