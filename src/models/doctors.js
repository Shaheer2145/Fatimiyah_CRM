import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true,
        index:true,
    },
    qualification: [String],
    department: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Departments",
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    status:{
        type:String,
        enum:["Available","Off-duty","In-consultation","On-leave"],
        default:"Available"
    },
    specialization: [String],
    category: {
        type: String,
        required: true,
        enum: ["Consultation", "Surgery", "Emergency", "Follow-up", "Routine Checkup", "Other"]
    },
    imageUrl: {
        type: String,
        required: false
    },
}, { timestamps: true });

export default mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

