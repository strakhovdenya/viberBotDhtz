var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614541343/dhtz/mart_2021_phru8m.png';

exports.send = function(response){
    response.send([
            new PictureMessage(SCHEDULE_URL, null, SCHEDULE_URL),
            new TextMessage(`${response.userProfile.name} лови рассписание на месяц`, constants.OPTION_KEYBOARD),
        ]
    );
}