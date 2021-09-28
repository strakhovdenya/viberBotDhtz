

import {bad,good} from "./sheduleDayAnswersElder.js";
import {con as constants} from "../constants/sheduleElder.js";
import dateFormatter from "./dateFormatter.js";

const send = function (response) {
    const formattedDate = dateFormatter();
    const objDay = constants.SHEDULE_ELDER[formattedDate];

    let text;
    let ansver;

    if (typeof objDay === 'undefined') {
        ansver = bad(response, formattedDate, objDay);
    } else {
        ansver = good(response, formattedDate, objDay);
    }

    response.send(ansver);
}

export default send;
