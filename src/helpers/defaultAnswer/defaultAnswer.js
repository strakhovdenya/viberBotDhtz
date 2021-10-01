import {AnswerModel} from "../../models/answer.js";
import {MenuModel} from "../../models/menu.js";
import Bot from "viber-bot";


export default async function getDefaultAnswer(userName, level) {
    let levelData = await AnswerModel.findOne({level: {$eq: level}, isDefault: {$eq: true}});
    if(!levelData){
        levelData = await AnswerModel.findOne({level: {$eq: 'start'}, isDefault: {$eq: true}});
    }

    let menuData = await MenuModel.findOne({level: {$eq: levelData.menu}});
    if(!menuData){
        menuData = await MenuModel.findOne({level: {$eq: 'start'}});
    }

    const answerResponse = [];
    for (let textType of levelData.answerText) {
        if (textType.sticker) {
            answerResponse.push(new Bot.Message.Sticker(textType.sticker))
        }

        if (textType.text) {
            answerResponse.push(new Bot.Message.Text(userName + ' '+textType.text, menuData))
        }
    }

    return answerResponse;
}
