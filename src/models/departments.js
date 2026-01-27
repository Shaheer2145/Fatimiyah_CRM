
import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    doctorCount: {
        type: Number,
        default: 0,
        required: false
    }
}, { timestamps: true });

export default mongoose.models.Departments || mongoose.model("Departments", departmentSchema);