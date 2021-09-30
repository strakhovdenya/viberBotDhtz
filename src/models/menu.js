import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    Type: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    Buttons: {
        type: Array,
        require: true
    },
    Revision: {
        type: Number
    },

});

export const  MenuModel = mongoose.model('Menu', ScheduleSchema);



