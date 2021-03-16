var exports = module.exports = {};
const TextMessage = require('viber-bot').Message.Text;
const StickerMessage = require('viber-bot').Message.Sticker;
const constants = require("./constants.js");

exports.good = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} лови рассписание на ${formattedDate} для младших.  \r\n
    (snowflake)Лед на: ${objDay.time_ice}  \r\n
    (car)Место: ${objDay.ice_place}  \r\n
    (run)Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================\r\n
    (time)Время сбора: ${objDay.gathering_time}`;

    const ansver = new TextMessage(text, constants.OPTION_KEYBOARD_JUNIOR);

    return [ansver];
}

exports.bad = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) для младших нет (sad)`;

    const ansver1 = new StickerMessage(40133);
    const ansver2 = new TextMessage(text, constants.OPTION_KEYBOARD_JUNIOR);

    return [ansver1,ansver2];
}