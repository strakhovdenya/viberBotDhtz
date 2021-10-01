import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ButtonSchema = new Schema({
    Columns: {
        type: Number,
        required: true,
    },
    Rows: {
        type: Number,
        required: true,
    },
    BgColor: {
        type: String,
        require: true
    },
    Text: {
        type: String,
        require: true
    },
    TextSize: {
        type: String,
        require: true
    },
    ActionType: {
        type: String,
        require: true
    },
    ActionBody: {
        type: String,
        require: true
    },
});

const MenuSchema = new Schema({
    Type: {
        type: String,
        require: true
    },
    Buttons: {
        type: [ButtonSchema],
        require: true
    },
    Revision: {
        type: Number
    },

});

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
        type: MenuSchema,
        require: true
    },
    answerText: {
        type: [AnswerTextSchema],
        require: true
    }
})

export const AnswerModel = mongoose.model('Answer', AnswerSchema);


