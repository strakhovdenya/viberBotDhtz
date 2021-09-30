import {MenuModel} from "../models/menu.js";

export class MenuService {
    static async getInstance(levelForFind) {
        if (!MenuService.instance) {
            MenuService.instance = new Map();
            // console.log('init  Map');
        }
        if(MenuService.instance.get(levelForFind)=== undefined){
            // console.log('set map');
            MenuService.instance.set(levelForFind, await MenuModel.findOne({level: {$eq: levelForFind}}));
        }
        // console.log('return menu');
        return MenuService.instance.get(levelForFind);
    }
}