import mongoose from "mongoose";

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
    ice_time: {
        type: String
    },
    ice_place: {
        type: String
    },
    ice_gathering_time: {
        type: String
    },
    ground_time: {
        type: String
    },
    ground_place: {
        type: String
    },
    ground_gathering_time: {
        type: String
    },
});

export default ScheduleSchema;