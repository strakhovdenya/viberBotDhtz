import Bot from "viber-bot";
import typesOfMenu from "../constants/typeOfMenu.js";
import {getMenuByLevelOrStart} from "../models/menu.js";


const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1617507898/dhtz/older_april_crvvpg.png';

const send = async function(response){
    const menuData = await getMenuByLevelOrStart(typesOfMenu.elder);
    response.send([
            new Bot.Message.Picture(SCHEDULE_URL, null, SCHEDULE_URL),
            // new StickerMessage(40133),
            new Bot.Message.Text(`${response.userProfile.name} лови расписание на месяц для старших`, menuData),
        ]
    );
}

export default send;