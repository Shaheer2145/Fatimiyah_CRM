import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [true, "Gender is required"]
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: false
    },
    address: {
        type: String,
        required: false
    },
    medicalHistory: [{
        condition: String,
        diagnosedDate: Date,
        notes: String
    }],
    allergies: [String],
    emergencyContact: {
        name: String,
        phone: String,
        relation: String
    }
}, { timestamps: true });

export default mongoose.models.Patient || mongoose.model("Patient", patientSchema);
