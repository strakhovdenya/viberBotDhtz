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
            "ActionBody": "shedule_today"
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

con.SHEDULE = {
    "01.02.2021": {
        "data": "01.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "02.02.2021": {
        "data": "02.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "03.02.2021": {
        "data": "03.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "04.02.2021": {
        "data": "04.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "05.02.2021": {
        "data": "05.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "06.02.2021": {
        "data": "06.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "07.02.2021": {
        "data": "07.02.2021",
        "time_ice": "06.15 - 07.45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering time": "06.00"
    },
    "08.02.2021": {
        "data": "08.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "09.02.2021": {
        "data": "09.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "10.02.2021": {
        "data": "10.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "11.02.2021": {
        "data": "11.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "12.02.2021": {
        "data": "12.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "13.02.2021": {
        "data": "13.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "14.02.2021": {
        "data": "14.02.2021",
        "time_ice": "06.15 - 07.45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering time": "06.00"
    },
    "15.02.2021": {
        "data": "15.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "П,алац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "16.02.2021": {
        "data": "16.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "17.02.2021": {
        "data": "17.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "18.02.2021": {
        "data": "18.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "19.02.2021": {
        "data": "19.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "20.02.2021": {
        "data": "20.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "21.02.2021": {
        "data": "21.02.2021",
        "time_ice": "06.15 - 07.45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering time": "06.00"
    },
    "22.02.2021": {
        "data": "22.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "23.02.2021": {
        "data": "23.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "24.02.2021": {
        "data": "24.02.2021",
        "time_ice": "",
        "ice_place": "",
        "time_ground": "18.45 - 20.00",
        "gathering time": "18.30"
    },
    "25.02.2021": {
        "data": "25.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "26.02.2021": {
        "data": "26.02.2021",
        "time_ice": "21.00 - 22.00",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "20.15"
    },
    "27.02.2021": {
        "data": "27.02.2021",
        "time_ice": "20.30 - 21.30",
        "ice_place": "Палац Спорту",
        "time_ground": "",
        "gathering time": "19.45"
    },
    "28.02.2021": {
        "data": "28.02.2021",
        "time_ice": "06.15 - 07.45",
        "ice_place": "Салтівський лід",
        "time_ground": "",
        "gathering time": "06.00"
    },
};