import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema.js";

export const  ScheduleMiddle = mongoose.model('ScheduleMiddle', ScheduleSchema);



