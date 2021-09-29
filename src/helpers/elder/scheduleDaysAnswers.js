import {goodElder,badElder} from "../sheduleDayAnswers.js";
import {ScheduleElder} from "../../models/scheduleElder.js";
import dateFormatter from "../dateFormatter.js";

function answerElderBinber(date) {
    return async function (response){
        let answer;

        const scheduleDay = await ScheduleElder.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = badElder(response, date, objDay);
        } else {
            answer = goodElder(response, date, objDay);
        }

        response.send(answer);
    }
}

export const scheduleTodayElder = answerElderBinber(dateFormatter());
export const scheduleTomorrowElder = answerElderBinber(dateFormatter(1));
