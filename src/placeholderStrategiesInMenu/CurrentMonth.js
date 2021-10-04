import {placeholders} from "./placeholderConatants.js";

export default class CurrentMonth {

    replace(menuData, options) {

        let monthName = null;

        if (options.currentDate !== undefined) {
            monthName = options.currentDate;
        }

        let replacedMonth;
        if (monthName === null) {
            const date = new Date();
            const monthNum = date.getMonth();
            const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
            replacedMonth = months[monthNum];
        } else {
            replacedMonth = monthName;
        }

        for (let button of menuData.Buttons) {
            button.Text = button.Text.replace(placeholders.currentDate, replacedMonth.toLowerCase())
        }

        return menuData;
    }
}