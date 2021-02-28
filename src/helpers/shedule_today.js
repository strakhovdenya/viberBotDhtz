var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");


exports.send = function (response) {
    const date = new Date();

    const day = date.getDate();
    const dayForatted = (day < 10 ? '0' : '') + day;

    const month = date.getMonth() + 1;
    const monthForatted = (month < 10 ? '0' : '') + month;

    const formattedDate = dayForatted + '.' + monthForatted + '.' + date.getFullYear();
    const objDay = constants.SHEDULE[formattedDate];
    let text;
    if (typeof objDay === 'undefined') {
        text = `${response.userProfile.name} сорри такой информации (на ${formattedDate}) ока нет(((`;
    } else {
        text = `${response.userProfile.name} лови рассписание на ${formattedDate}.  \r\n
    Лед на: ${objDay.time_ice}  \r\n
    Место: ${objDay.ice_place}  \r\n
    Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================\r\n
    Время сбора: ${objDay.gathering_time}`;
    }

    const ansver =new TextMessage(text, constants.OPTION_KEYBOARD);

    response.send(ansver);
}