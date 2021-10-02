import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema.js";

export const  ScheduleElder = mongoose.model('ScheduleElder', ScheduleSchema);



