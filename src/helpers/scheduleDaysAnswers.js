import {ScheduleJunior} from "../models/scheduleJunior.js";
import {ScheduleElder} from "../models/scheduleElder.js";
import {ScheduleMiddle} from "../models/scheduleMiddle.js";
import {getMenuByLevelOrStart} from "../models/menu.js";

import dateFormatter from "./dateFormatter.js";

import Bot from "viber-bot";
import typesOfClient from "../constants/typeOfClient.js";
import typesOfMenu from "../constants/typeOfMenu.js";



function dataEmptySanitize(param) {
    if (param === "" || param === undefined) {
        return ' - ';
    }
    return param;
}

function bindGoodAnswer(typeForWhom, menuType) {
    return async function (response, formattedDate, objDay) {

        const menuData = await getMenuByLevelOrStart(menuType);

        const text = `${response.userProfile.name} лови расписание на ${formattedDate} для ${typeForWhom}.  \r\n
    =========(snowflake)Лед=========\r\n
    (car)Место: ${dataEmptySanitize(objDay.ice_place)}  \r\n
    (time)тренировка: ${dataEmptySanitize(objDay.ice_time)}  \r\n 
    (time)сбор: ${dataEmptySanitize(objDay.ice_gathering_time)}\r\n 
     =========(run)Земля=======\r\n
    (car)Место: ${dataEmptySanitize(objDay.ground_place)}  \r\n
    (time)тренировка: ${dataEmptySanitize(objDay.ground_time)} \r\n 
    (time)сбор: ${dataEmptySanitize(objDay.ground_gathering_time)}`;

        const answer = new Bot.Message.Text(text, menuData);

        return [answer];
    }
}

function bindBadAnswer(typeForWhom, menuType) {
    return async function (response, formattedDate, objDay) {

        const menuData = await getMenuByLevelOrStart(menuType);

        const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) для ${typeForWhom} нет (sad)`;

        const answer1 = new Bot.Message.Sticker(40133);
        const answer2 = new Bot.Message.Text(text, menuData);

        return [answer1, answer2];
    }
}


export const goodJunior = bindGoodAnswer(typesOfClient.junior, typesOfMenu.junior);
export const goodElder = bindGoodAnswer(typesOfClient.elder, typesOfMenu.elder);
export const goodMiddle = bindGoodAnswer(typesOfClient.middle, "middle");

export const badJunior = bindBadAnswer(typesOfClient.junior, typesOfMenu.junior);
export const badElder = bindBadAnswer(typesOfClient.elder, typesOfMenu.elder);
export const badMiddle = bindBadAnswer(typesOfClient.middle, typesOfMenu.middle);

function answerJuniorBinber(date) {
    return async function (response) {
        let answer;

        const scheduleDay = await ScheduleJunior.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = await badJunior(response, date, objDay);
        } else {
            answer = await goodJunior(response, date, objDay);
        }
        console.log(answer);
        response.send(answer);
    }
}

function answerElderBinber(date) {
    return async function (response) {
        let answer;

        const scheduleDay = await ScheduleElder.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = await badElder(response, date, objDay);
        } else {
            answer = await goodElder(response, date, objDay);
        }

        response.send(answer);
    }
}

function answerElderMiddle(date) {
    return async function (response) {
        let answer;

        const scheduleDay = await ScheduleMiddle.find({data: {$eq: date}});

        let [objDay] = scheduleDay;

        if (typeof objDay === 'undefined') {
            answer = await badMiddle(response, date, objDay);
        } else {
            answer = await goodMiddle(response, date, objDay);
        }

        response.send(answer);
    }
}

export const scheduleTodayElder = answerElderBinber(dateFormatter());
export const scheduleTomorrowElder = answerElderBinber(dateFormatter(1));

export const scheduleTodayJunior = answerJuniorBinber(dateFormatter());
export const scheduleTomorrowJunior = answerJuniorBinber(dateFormatter(1));

export const scheduleTodayMiddle = answerElderMiddle(dateFormatter());
export const scheduleTomorrowMiddle = answerElderMiddle(dateFormatter(1));
