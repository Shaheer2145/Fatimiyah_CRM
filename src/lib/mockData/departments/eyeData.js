import herobgImage from "../../../app/assets/herobgimage.png";
import {
    Eye,
    Stethoscope,
    Zap
} from "lucide-react";

const eyeData = {
    slug: "eye",
    title: "Eye Specialist & Vision Care Centre",
    subtitle: "Comprehensive eye care including diagnostics, surgery, and vision correction.",
    herobgImage: herobgImage,

    conditions: [
        {
            icon: Eye,
            title: "Vision Disorders",
            items: ["Myopia", "Hyperopia", "Astigmatism", "Presbyopia"]
        },
        {
            icon: Stethoscope,
            title: "Eye Diseases",
            items: ["Cataract", "Glaucoma", "Retinopathy"]
        },
        {
            icon: Zap,
            title: "Pediatric Ophthalmology",
            items: ["Vision screening for children", "Lazy eye treatment"]
        }
    ],

    services: [
        {
            icon: Zap,
            title: "Cataract Surgery",
            desc: "Advanced surgical techniques for safe cataract removal."
        },
        {
            icon: Stethoscope,
            title: "Laser Vision Correction",
            desc: "LASIK and other refractive procedures for clear vision."
        },
        {
            icon: Eye,
            title: "Comprehensive Eye Exams",
            desc: "Routine eye checkups, imaging, and diagnostics."
        }
    ],

    info: [
        {
            title: "Preparation",
            text: "Bring previous eye test reports, prescriptions, or surgery history."
        },
        {
            title: "Follow-Up",
            text: "Attend all follow-up visits to monitor vision and post-treatment progress."
        }
    ],

    testimonials: [
        {
            text: "Thanks to the eye specialist, my vision improved after LASIK surgery.",
            name: "Farhan Ali",
            role: "Patient"
        }
    ]
};

export default eyeData;
