const mogoose = require('mongoose');

const config = require('../config/db');

const ScheduleSchema = mogoose.Schema({
    day: {
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

const Schedule = module.exports = mogoose.model('Schedule', ScheduleSchema);

// module.exports.getUserByLogin = function (login, callback) {
//     const query = {login: login};
//     User.findOne(query, callback);
// }
//
// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }



