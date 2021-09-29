import {bad,good} from "./sheduleDayAnswersJunior.js";
import {ScheduleJunior} from "../../models/scheduleJunior.js";
import dateFormatter from "../dateFormatter.js";

function answerJuniorBinber(date) {
    return async function (response){
        let answer;

        const scheduleDay = await ScheduleJunior.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = bad(response, date, objDay);
        } else {
            answer = good(response, date, objDay);
        }

        response.send(answer);
    }
}

export const scheduleTodayJunior = answerJuniorBinber(dateFormatter());
export const scheduleTomorrowJunior = answerJuniorBinber(dateFormatter(1));
