import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        maxLength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false // Don't return password by default
    },
    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        default: "patient"
    },
    phoneNumber: {
        type: String,
        required: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        required: false
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);
