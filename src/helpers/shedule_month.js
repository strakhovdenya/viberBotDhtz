var exports = module.exports = {};

const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;

const OPTION_KEYBOARD = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на февраль",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "shedule_month"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на сегодня",
            "ActionType": "reply",
            "ActionBody": "DayOff"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на завтра",
            "ActionType": "reply",
            "ActionBody": "HalfDayOff"
        }
    ]
};

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1614417847/dhtz/shedule_feb_kfncaw.jpg';



exports.send = function(response){
    response.send([
            new PictureMessage(SCHEDULE_URL, null, SCHEDULE_URL),
            new TextMessage(`${response.userProfile.name} лови рассписание на месяц`, OPTION_KEYBOARD),
        ]
    );
}