import herobgImage from "../../../app/assets/herobgimage.png";
import {
    Smile,
    // Tooth,
    Stethoscope,
    Drill,
    Sparkles,
    ShieldCheck
} from "lucide-react";

const dentistData = {
    slug: "dentist",
    title: "Dental Care & Oral Health Centre",
    subtitle: "Comprehensive dental care for healthy teeth and a confident smile, from routine checkups to advanced dental procedures.",
    herobgImage: herobgImage,

    conditions: [
        {
            icon: "",
            title: "General Dentistry",
            items: [
                "Tooth decay",
                "Gum disease",
                "Dental sensitivity"
            ]
        },
        {
            icon: Drill,
            title: "Restorative Dentistry",
            items: [
                "Dental fillings",
                "Root canal treatment",
                "Crowns & bridges"
            ]
        },
        {
            icon: Sparkles,
            title: "Cosmetic Dentistry",
            items: [
                "Teeth whitening",
                "Smile makeover",
                "Dental veneers"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Preventive Dental Care",
            items: [
                "Regular dental checkups",
                "Oral hygiene counseling",
                "Fluoride treatments"
            ]
        }
    ],

    services: [
        {
            icon: Smile,
            title: "Teeth Whitening",
            desc: "Professional teeth whitening for a brighter and healthier smile."
        },
        {
            icon: Drill,
            title: "Root Canal Treatment",
            desc: "Advanced pain-free root canal procedures to save damaged teeth."
        },
        {
            icon: Stethoscope,
            title: "Dental Checkups",
            desc: "Routine dental examinations for early detection of oral health issues."
        }
    ],

    info: [
        {
            title: "Preparation",
            text:
                "Please brush your teeth before your appointment and bring any previous dental records."
        },
        {
            title: "Aftercare",
            text:
                "Follow post-treatment instructions provided by your dentist for optimal recovery."
        }
    ],

    testimonials: [
        {
            text:
                "I was nervous about dental treatments, but the dentist made me feel completely at ease. Highly recommended!",
            name: "Hamza Rafiq",
            role: "Patient"
        },
        {
            text:
                "Excellent dental care with modern equipment. My smile has never looked better.",
            name: "Sana Malik",
            role: "Patient"
        }
    ]
};

export default dentistData;
