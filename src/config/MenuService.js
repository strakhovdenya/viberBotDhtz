import {MenuModel} from "../models/menu.js";

export class MenuService {
    static async getInstance(levelForFind) {
        if (!MenuService.instance) {
            MenuService.instance = await MenuModel.findOne({level: {$eq: levelForFind}});
            console.log('get menu');
        }
        console.log('return menu');
        return MenuService.instance;
    }
}