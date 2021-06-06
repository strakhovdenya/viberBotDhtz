var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/a_-90/v1622657722/dhtz/sbory_junior_fj9mui.jpg';

exports.send = function(response){
    response.send([
            // new PictureMessage(SCHEDULE_URL, null, SCHEDULE_URL),
            // new TextMessage(`${response.userProfile.name} лови расписание сборов для младших`, constants.OPTION_KEYBOARD_JUNIOR),
            new TextMessage(`${response.userProfile.name} расписание сборов для младших уточняятся`, constants.OPTION_KEYBOARD_JUNIOR),
        ]
    );
}
