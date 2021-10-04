import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ButtonSchema = new Schema({
    Columns: {
        type: Number,
        required: true,
    },
    Rows: {
        type: Number,
        required: true,
    },
    BgColor: {
        type: String,
        require: true
    },
    Text: {
        type: String,
        require: true
    },
    TextSize: {
        type: String,
        require: true
    },
    ActionType: {
        type: String,
        require: true
    },
    ActionBody: {
        type: String,
        require: true
    },
});

const MenuSchema = new Schema({
    level: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    Buttons: {
        type: [ButtonSchema],
        require: true
    },
    Revision: {
        type: Number
    },

});

export const MenuModel = mongoose.model('Menu', MenuSchema);

const placeholders = {
    currentDate: ':current_date:'
}

const options = {
    currentDate: ''
}

function changeInMenuPlaceholderCurrentMonth(menuData, monthName = null) {
    let replacedMonth;
    if (monthName === null) {
        const date = new Date();
        const monthNum = date.getMonth();
        const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        replacedMonth = months[monthNum];
    } else{
        replacedMonth = monthName;
    }

    for (let button of menuData.Buttons) {
        button.Text = button.Text.replace(placeholders.currentDate, replacedMonth.toLowerCase())
    }

    return menuData;
}

export async function getMenuByLevelOrStart(menuType, options = {}) {
    let menuData = await MenuModel.findOne({level: {$eq: menuType}});
    if (!menuData) {
        menuData = await MenuModel.findOne({level: {$eq: 'start'}});
    }

    let monthName = null;

    if (options.currentDate !== undefined) {
        monthName = options.currentDate;
    }

    return changeInMenuPlaceholderCurrentMonth(menuData, monthName);
}


