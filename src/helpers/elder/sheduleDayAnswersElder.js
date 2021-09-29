import Bot from "viber-bot";
import {con as constants} from "../constants.js";

export const good = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} лови расписание на ${formattedDate} для старших.  \r\n
    (snowflake)Лед на: ${objDay.time_ice}  \r\n
    (car)Место: ${objDay.ice_place}  \r\n
    (run)Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================\r\n
    (time)Время сбора: ${objDay.gathering_time}`;

    const ansver = new Bot.Message.Text(text, constants.OPTION_KEYBOARD_ELDER);

    return [ansver];
}

export const bad = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) для старших нет (sad)`;

    const ansver1 = new Bot.Message.Sticker(40133);
    const ansver2 = new Bot.Message.Text(text, constants.OPTION_KEYBOARD_ELDER);

    return [ansver1,ansver2];
}