var exports = module.exports = {};
const TextMessage = require('viber-bot').Message.Text;
const constants = require("./constants.js");

exports.good = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} лови рассписание на ${formattedDate}.  \r\n
    Лед на: ${objDay.time_ice}  \r\n
    Место: ${objDay.ice_place}  \r\n
    Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================\r\n
    Время сбора: ${objDay.gathering_time}`;

    const ansver = new TextMessage(text, constants.OPTION_KEYBOARD);

    return [ansver];
}

exports.bad = function (response, formattedDate, objDay) {

    const text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) ока нет(((`;

    const ansver = new TextMessage(text, constants.OPTION_KEYBOARD);

    return [ansver];
}