import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema.js";

export const  ScheduleJunior = mongoose.model('ScheduleJunior', ScheduleSchema);



