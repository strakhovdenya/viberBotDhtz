import {getAnswerByLevelOrStart} from "../models/answer.js";
import {getMenuByLevelOrStart} from "../models/menu.js";
import Bot from "viber-bot";


export default async function getDefaultAnswer(userName, level) {

    let levelData = await getAnswerByLevelOrStart(level)

    const menuData = await getMenuByLevelOrStart(levelData.menu);

    const answerResponse = [];
    for (let textType of levelData.answerText) {
        if (textType.sticker) {
            answerResponse.push(new Bot.Message.Sticker(textType.sticker))
        }

        if (textType.text) {
            answerResponse.push(new Bot.Message.Text(userName + ' ' + textType.text, menuData))
        }
    }

    return answerResponse;
}
