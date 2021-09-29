import {ScheduleJunior} from "../models/scheduleJunior.js";
import {ScheduleElder} from "../models/scheduleElder.js";

import dateFormatter from "./dateFormatter.js";

import Bot from "viber-bot";
import {con as constants} from "./constants.js";

const typesOfClient = {
    elder:"старших",
    junior:"младших",
}

function bindGoodAnswer(typeForWhom, menu){
    return function (response, formattedDate, objDay) {

        const text = `${response.userProfile.name} лови расписание на ${formattedDate} для ${typeForWhom}.  \r\n
    (snowflake)Лед на: ${objDay.time_ice}  \r\n
    (car)Место: ${objDay.ice_place}  \r\n
    (run)Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================\r\n
    (time)Время сбора: ${objDay.gathering_time}`;

        const answer  = new Bot.Message.Text(text, menu);

        return [answer];
    }
}

function bindBadAnswer(typeForWhom, menu){
    return function (response, formattedDate, objDay) {

        const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) для ${typeForWhom} нет (sad)`;

        const answer1 = new Bot.Message.Sticker(40133);
        const answer2 = new Bot.Message.Text(text, menu);

        return [answer1,answer2];
    }
}


export const goodJunior = bindGoodAnswer(typesOfClient.junior, constants.OPTION_KEYBOARD_JUNIOR);
export const goodElder = bindGoodAnswer(typesOfClient.elder, constants.OPTION_KEYBOARD_ELDER);

export const badJunior = bindBadAnswer(typesOfClient.junior, constants.OPTION_KEYBOARD_JUNIOR);
export const badElder = bindBadAnswer(typesOfClient.elder, constants.OPTION_KEYBOARD_ELDER);

function answerJuniorBinber(date) {
    return async function (response){
        let answer;

        const scheduleDay = await ScheduleJunior.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = badJunior(response, date, objDay);
        } else {
            answer = goodJunior(response, date, objDay);
        }

        response.send(answer);
    }
}

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

export const scheduleTodayJunior = answerJuniorBinber(dateFormatter());
export const scheduleTomorrowJunior = answerJuniorBinber(dateFormatter(1));
