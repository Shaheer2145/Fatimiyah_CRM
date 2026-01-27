import herobgImage from "../../../app/assets/herobgimage.png";
import {
    Stethoscope,
    Zap,
    Search
} from "lucide-react";

const entData = {
    slug: "ent",
    title: "ENT & Head & Neck Surgery",
    subtitle: "Comprehensive ear, nose, and throat care for all ages.",
    herobgImage: herobgImage,

    conditions: [
        {
            icon: Stethoscope,
            title: "Ear Disorders",
            items: ["Hearing loss", "Ear infections", "Tinnitus"]
        },
        {
            icon: Search,
            title: "Nose & Sinus Issues",
            items: ["Sinusitis", "Allergic rhinitis", "Deviated septum"]
        },
        {
            icon: Zap,
            title: "Throat & Voice Disorders",
            items: ["Tonsillitis", "Voice therapy", "Swallowing disorders"]
        }
    ],

    services: [
        {
            icon: Zap,
            title: "Endoscopic Sinus Surgery",
            desc: "Minimally invasive treatment for chronic sinusitis."
        },
        {
            icon: Stethoscope,
            title: "Hearing & Audiology",
            desc: "Hearing tests, hearing aids, and tinnitus management."
        },
        {
            icon: Search,
            title: "Throat & Voice Care",
            desc: "Tonsillectomy, voice therapy, and ENT diagnostics."
        }
    ],

    info: [
        {
            title: "Preparation",
            text: "Bring past ENT reports, hearing tests, or allergy reports."
        },
        {
            title: "Follow-Up",
            text: "Follow-up visits are required for post-surgery checkups or therapy sessions."
        }
    ],

    testimonials: [
        {
            text: "ENT team provided excellent care and helped improve my sinus issues.",
            name: "Sana Iqbal",
            role: "Patient"
        }
    ]
};

export default entData;
