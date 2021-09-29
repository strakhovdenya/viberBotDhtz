import Bot from "viber-bot";
import {con as constants} from "../constants.js";


const SCHEDULE_URL = 'https://res.cloudinary.com/hxrdi6ylu/image/upload/v1617507898/dhtz/older_april_crvvpg.png';

const send = function(response){
    response.send([
            new Bot.Message.Picture(SCHEDULE_URL, null, SCHEDULE_URL),
            // new StickerMessage(40133),
            new Bot.Message.Text(`${response.userProfile.name} лови расписание на месяц для старших`, constants.OPTION_KEYBOARD_ELDER),
        ]
    );
}

export default send;