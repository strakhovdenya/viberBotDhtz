import Bot from "viber-bot";
import typesOfMenu from "../constants/typeOfMenu.js";
import {getMenuByLevelOrStart} from "../models/menu.js";

const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/a_-90/v1622657722/dhtz/sbory_junior_fj9mui.jpg';

const send = async function(response){
    const menuData = await getMenuByLevelOrStart(typesOfMenu.junior, );
    response.send([
            // new PictureMessage(SCHEDULE_URL, null, SCHEDULE_URL),
            // new TextMessage(`${response.userProfile.name} лови расписание сборов для младших`, constants.OPTION_KEYBOARD_JUNIOR),
            new Bot.Message.Text(`${response.userProfile.name} расписание сборов для младших уточняятся`, menuData),
        ]
    );
}

export default send;
