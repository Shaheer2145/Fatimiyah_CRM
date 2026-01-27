import herobgImage from "../../../app/assets/herobgimage.png";
import {
    Stethoscope,
    Search,
    Scissors,
    Baby,
    Zap,
    Sun,
    Snowflake,
    Camera
} from "lucide-react";

const dermatologyData = {
    slug: "dermatology",
    title: "Dermatology & Skin Care Centre",
    subtitle: "Comprehensive care for your skin, hair, and nails. From clinical treatments to advanced aesthetic procedures.",
    herobgImage: herobgImage,


    conditions: [
        {
            icon: Stethoscope,
            title: "Medical Dermatology",
            items: ["Acne", "Psoriasis", "Eczema", "Rosacea"]
        },
        {
            icon: Search,
            title: "Skin Cancer Clinic",
            items: ["Mole mapping", "Biopsies", "Melanoma screening"]
        },
        {
            icon: Scissors,
            title: "Hair & Nail Disorders",
            items: ["Hair loss", "Nail fungus"]
        },
        {
            icon: Baby,
            title: "Pediatric Dermatology",
            items: ["Rashes", "Birthmarks"]
        }
    ],
    services: [
        {
            icon: Zap,
            title: "Laser Therapy",
            desc: "Scar removal and skin resurfacing."
        },
        {
            icon: Sun,
            title: "Phototherapy",
            desc: "UV light treatment for chronic skin disease."
        },
        {
            icon: Snowflake,
            title: "Cryotherapy",
            desc: "Removal of warts and skin tags."
        },
        {
            icon: Camera,
            title: "Dermoscopy",
            desc: "Advanced skin cancer detection."
        }
    ],
    info: [
        {
            title: "Preparation",
            text: "Please remove all makeup before your skin examination."
        },
        {
            title: "Online Reports",
            text: "Access your biopsy and lab reports online."
        }
    ],

    testimonials: [
        {
            text: "My skin improved dramatically after treatment.",
            name: "Sarah Ahmed",
            role: "Patient"
        }
    ]
};

export default dermatologyData;
