import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AnswerTextSchema = new Schema({
    text: {
        type: String,
    },
    sticker: {
        type: Number,
    },
    picture: {
        type: String,
        require: true
    },

});

const AnswerSchema = new Schema({
    level: {
        type: String,
        require: true
    },
    isDefault:{
        type:Boolean,
        required:true
    },
    menu: {
        type: String,
        require: true
    },
    answerText: {
        type: [AnswerTextSchema],
        require: true
    }
})

export const AnswerModel = mongoose.model('Answer', AnswerSchema);

export async function getAnswerByLevelOrStart(level) {
    let levelData = await AnswerModel.findOne({level: {$eq: level}, isDefault: {$eq: true}});
    if(!levelData){
        levelData = await AnswerModel.findOne({level: {$eq: 'start'}, isDefault: {$eq: true}});
    }

    return levelData;
}
