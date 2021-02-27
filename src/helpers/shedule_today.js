var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614417847/dhtz/shedule_feb_kfncaw.jpg';

exports.send = function (response) {
    const date = new Date();

    const day = date.getDate();
    const dayForatted = (day < 10 ? '0' : '') + day;

    const month = date.getMonth() + 1;
    const monthForatted = (month < 10 ? '0' : '') + month;

    const formattedDate = day + '.' + monthForatted + '.' + date.getFullYear();
    const objDay = constants.SHEDULE[formattedDate];

    const text = `${response.userProfile.name} лови рассписание на ${formattedDate}.  \r\n
    Лед на: ${objDay.time_ice}  \r\n
    Место: ${objDay.ice_place}  \r\n
    Земля: ${objDay.time_ground === "" ? '- ' : objDay.time_ground} \r\n
    ==========================
    Время сбора: ${objDay.gathering_time}`;
    
    response.send([
            new TextMessage(text, constants.OPTION_KEYBOARD),
        ]
    );
}