import {MenuModel} from "../models/menu.js";

export class MenuService {
    static async getInstance() {
        if (!MenuService.instance) {
            MenuService.instance = await MenuModel.find({$eq:{level:"start"}});
            console.log('get menu');
        }
        console.log('return menu');
        return MenuService.instance;
    }
}