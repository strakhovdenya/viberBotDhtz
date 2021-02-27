var con = module.exports = {};

con.OPTION_KEYBOARD = {
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