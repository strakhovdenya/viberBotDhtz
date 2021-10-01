import {AnswerModel} from "../../models/answer.js";
import Bot from "viber-bot";


export default async function getDefaultAnswer(userName, level) {
    let levelData = await AnswerModel.findOne({level: {$eq: level}, isDefault: {$eq: true}});
    if(!levelData){
        levelData = await AnswerModel.findOne({level: {$eq: 'start'}, isDefault: {$eq: true}});
    }
    const answerResponse = [];
    for (let textType of levelData.answerText) {
        if (textType.sticker) {
            answerResponse.push(new Bot.Message.Sticker(textType.sticker))
        }

        if (textType.text) {
            answerResponse.push(new Bot.Message.Text(userName + ' '+textType.text, levelData.menu))
        }
    }

    return answerResponse;
}
