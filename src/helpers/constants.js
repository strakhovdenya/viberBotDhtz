export const con = {
    OPTION_KEYBOARD_JUNIOR:{},
    OPTION_KEYBOARD_ELDER:{},
    OPTION_KEYBOARD_START:{}

}

con.OPTION_KEYBOARD_JUNIOR = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "Text": "Расписание сборов ИЮНЬ",
            "TextSize": "large",
            "ActionType": "reply",
            "ActionBody": "shedule_month_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            // "BgColor": "#2db9b9",
            "BgColor": "#adaeae",
            "Text": "Расписание на сегодня<br>(нет информации)",
            "TextSize": "large",
            "ActionType": "reply",
            "ActionBody": "shedule_today_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            // "BgColor": "#2db9b9",
            "BgColor": "#adaeae",
            "Text": "Расписание на завтра<br>(нет информации)",
            "TextSize": "large",
            "ActionType": "reply",
            "ActionBody": "shedule_tomorrow_junior"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#b8426b",
            "Text": "Вернуться для выбора (младшие/старшие)",
            "TextSize": "large",
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
            "Text": "Расписание на АПРЕЛЬ",
            "TextSize": "large",
            "ActionType": "reply",
            "ActionBody": "shedule_month_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            // "BgColor": "#2db9b9",
            "BgColor": "#adaeae",
            "Text": "Расписание на сегодня<br>(нет информации)",
            "TextSize": "large",
            "ActionType": "reply",//"reply",
            "ActionBody": "shedule_today_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            // "BgColor": "#2db9b9",
            "BgColor": "#adaeae",
            "Text": "Расписание на завтра<br>(нет информации)",
            "TextSize": "large",
            "ActionType": "reply",//"reply",
            "ActionBody": "shedule_tomorrow_elder"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#b8426b",
            "TextSize": "large",
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







