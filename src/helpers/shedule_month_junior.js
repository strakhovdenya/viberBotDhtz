var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1617507904/dhtz/yanger_april_zbxvzn.png';

exports.send = function(response){
    response.send([
            new PictureMessage(SCHEDULE_URL, null, SCHEDULE_URL),
            new TextMessage(`${response.userProfile.name} лови расписание на месяц для младших`, constants.OPTION_KEYBOARD_JUNIOR),
        ]
    );
}