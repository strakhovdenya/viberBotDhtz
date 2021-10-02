import {ScheduleJunior} from "../models/scheduleJunior.js";
import {ScheduleElder} from "../models/scheduleElder.js";
import {getMenuByLevelOrStart} from "../models/menu.js";

import dateFormatter from "./dateFormatter.js";

import Bot from "viber-bot";
import {con as constants} from "./constants.js";

const typesOfClient = {
    elder:"старших",
    junior:"младших",
}

function bindGoodAnswer(typeForWhom, menuType){
    return async function (response, formattedDate, objDay) {

        const  menuData =  await getMenuByLevelOrStart(menuType);

        const text = `${response.userProfile.name} лови расписание на ${formattedDate} для ${typeForWhom}.  \r\n
    =========(snowflake)Лед=========\r\n
    (car)Место: ${objDay.ice_place}  \r\n
    время: ${objDay.time_ice}  \r\n 
    (time)Время сбора: ${objDay.gathering_time}\r\n 
     =========(run)Земля=======\r\n
    (car)Место: ${objDay.ice_place}  \r\n
    время: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n 
    (time)Время сбора: ${objDay.gathering_time}`;

        const answer  = new Bot.Message.Text(text, menuData);

        return [answer];
    }
}

function bindBadAnswer(typeForWhom, menuType){
    return async function (response, formattedDate, objDay) {

        const  menuData =  await getMenuByLevelOrStart(menuType);

        const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) для ${typeForWhom} нет (sad)`;

        const answer1 = new Bot.Message.Sticker(40133);
        const answer2 = new Bot.Message.Text(text, menuData);

        return [answer1,answer2];
    }
}


export const goodJunior = bindGoodAnswer(typesOfClient.junior, "junior");
export const goodElder = bindGoodAnswer(typesOfClient.elder, "elder");

export const badJunior = bindBadAnswer(typesOfClient.junior, "junior");
export const badElder = bindBadAnswer(typesOfClient.elder, "elder");

function answerJuniorBinber(date) {
    return async function (response){
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
    return async function (response){
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

export const scheduleTodayElder = answerElderBinber(dateFormatter());
export const scheduleTomorrowElder = answerElderBinber(dateFormatter(1));

export const scheduleTodayJunior = answerJuniorBinber(dateFormatter());
export const scheduleTomorrowJunior = answerJuniorBinber(dateFormatter(1));
