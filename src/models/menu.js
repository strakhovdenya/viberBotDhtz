import mongoose from "mongoose";
import CurrentMonth from "../placeholderStrategiesInMenu/CurrentMonth.js";

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

const placeholderStack = [
    new CurrentMonth()
]



export async function getMenuByLevelOrStart(menuType, options = {}) {
    let menuData = await MenuModel.findOne({level: {$eq: menuType}});
    if (!menuData) {
        menuData = await MenuModel.findOne({level: {$eq: 'start'}});
    }

    for (let strategy of placeholderStack){
        menuData = strategy.replace(menuData, options)
    }

    return menuData;
}


