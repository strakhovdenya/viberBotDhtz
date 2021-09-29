import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    data: {
        type: String,
        require: true
    },
    year_month: {
        type: String,
        require: true
    },
    time_ice: {
        type: String
    },
    ice_place: {
        type: String
    },
    time_ground: {
        type: String
    },
    gathering_time: {
        type: String
    }
});

export const  ScheduleJunior = mongoose.model('ScheduleJunior', ScheduleSchema);



