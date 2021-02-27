var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;
const constants = require("./constants.js");

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614417847/dhtz/shedule_feb_kfncaw.jpg';

exports.send = function(response){
    const date = new Date();
    const month = date.getMonth()+1;
    const monthForatted = (month < 10 ? '0' : '') + month;
    const formattedDate = date.getDate() + '.' + monthForatted + '.' + date.getFullYear();
    response.send([
            new TextMessage(`${response.userProfile.name} лови рассписание на ${formattedDate}`, constants.OPTION_KEYBOARD),
        ]
    );
}