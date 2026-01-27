import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    days: [{
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }],
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    clinicNo: {
        type: Number
    },
    isAvailable: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true
});
export default mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);