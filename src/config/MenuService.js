import {MenuModel} from "../models/menu.js";

export class MenuService {
    static async getInstance() {
        if (!Menu.instance) {
            Menu.instance = await MenuModel.find({$eq:{level:"start"}});
            console.log('get menu');
        }
        console.log('return menu');
        return Menu.instance;
    }
}