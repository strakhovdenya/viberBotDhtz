var con = module.exports = {};

con.OPTION_KEYBOARD_JUNIOR = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на МАРТ",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "shedule_month_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на сегодня",
            "ActionType": "reply",
            "ActionBody": "shedule_today_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на завтра",
            "ActionType": "reply",
            "ActionBody": "shedule_tomorrow_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#b8426b",
            "Text": "Вернуться для выбора (младшие/старшие)",
            "ActionType": "reply",
            "ActionBody": "start"
        }
    ]
};

con.OPTION_KEYBOARD_ELDER = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Рассписание на МАРТ",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "shedule_month_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#c3c6c6",
            "Text": "Рассписание на сегодня",
            "ActionType": "none",//"reply",
            "ActionBody": "shedule_today_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#c3c6c6",
            "Text": "Рассписание на завтра",
            "ActionType": "none",//"reply",
            "ActionBody": "shedule_tomorrow_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#b8426b",
            "Text": "Вернуться для выбора (младшие/старшие)",
            "ActionType": "reply",
            "ActionBody": "start"
        }
    ]
};

con.OPTION_KEYBOARD_START = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 3,
            "Rows": 2,
            "BgColor": "#3c7af1",
            "Text": "Старшие",
            "TextSize": "large",
            //TextVAlign, TextHAlign : using default (middle, center)
            "ActionType": "reply",
            "ActionBody": "elder"
        },
        {
            "Columns": 3,
            "Rows": 2,
            "BgColor": "#3c7af1",
            "Text": "Младшие",
            "TextSize": "large",
            "ActionType": "reply",
            "ActionBody": "junior"
        }
    ]
};

con.SHEDULE_JUNIOR = {
    "01.03.2021": {
        "data": "01.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "02.03.2021": {
        "data": "02.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "03.03.2021": {
        "data": "03.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "04.03.2021": {
        "data": "04.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "05.03.2021": {
        "data": "05.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "06.03.2021": {
        "data": "06.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "07.03.2021": {
        "data": "07.03.2021",
        "time_ice": "06:15 - 07:45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering_time": "6:00"
    },
    "08.03.2021": {
        "data": "08.03.2021",
        "time_ice": "ВИХІДНИЙ",
        "ice_place": "",
        "time_ground": "ВИХІДНИЙ",
        "gathering_time": ""
    },
    "09.03.2021": {
        "data": "09.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "10.03.2021": {
        "data": "10.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "11.03.2021": {
        "data": "11.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "12.03.2021": {
        "data": "12.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "13.03.2021": {
        "data": "13.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "14.03.2021": {
        "data": "14.03.2021",
        "time_ice": "06:15 - 07:45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering_time": "6:00"
    },
    "15.03.2021": {
        "data": "15.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "16.03.2021": {
        "data": "16.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "17.03.2021": {
        "data": "17.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "18.03.2021": {
        "data": "18.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "19.03.2021": {
        "data": "19.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "20.03.2021": {
        "data": "20.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "21.03.2021": {
        "data": "21.03.2021",
        "time_ice": "06:15 - 07:45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering_time": "6:00"
    },
    "22.03.2021": {
        "data": "22.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "23.03.2021": {
        "data": "23.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "24.03.2021": {
        "data": "24.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "25.03.2021": {
        "data": "25.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "26.03.2021": {
        "data": "26.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "27.03.2021": {
        "data": "27.03.2021",
        "time_ice": "20:30 - 21:30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "19:45"
    },
    "28.03.2021": {
        "data": "28.03.2021",
        "time_ice": "06:15 - 07:45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering_time": "6:00"
    },
    "29.03.2021": {
        "data": "29.03.2021",
        "time_ice": "21:00 - 22:00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering_time": "20:15"
    },
    "30.03.2021": {
        "data": "30.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    },
    "31.03.2021": {
        "data": "31.03.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "17:30 - 19:00",
        "gathering_time": "17:15"
    }
};

con.SHEDULE_ELDER = {};





