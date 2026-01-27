import herobgImage from "../../../app/assets/herobgimage.png";
import {
    Baby,
    Stethoscope,
    Syringe,
    Activity,
    HeartPulse,
    ShieldCheck
} from "lucide-react";

const childSpecialistData = {
    slug: "child-specialist",
    title: "Child Specialist & Pediatrics Centre",
    subtitle:
        "Comprehensive healthcare for infants, children, and adolescents, ensuring healthy growth and development at every stage.",
    herobgImage: herobgImage,

    conditions: [
        {
            icon: Baby,
            title: "Newborn & Infant Care",
            items: [
                "Newborn checkups",
                "Vaccination guidance",
                "Feeding & nutrition counseling"
            ]
        },
        {
            icon: Stethoscope,
            title: "Common Childhood Illnesses",
            items: [
                "Fever & infections",
                "Cough, cold & flu",
                "Digestive issues"
            ]
        },
        {
            icon: Activity,
            title: "Growth & Development",
            items: [
                "Growth monitoring",
                "Delayed milestones",
                "Developmental assessments"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Preventive Pediatrics",
            items: [
                "Immunization programs",
                "School health exams",
                "Nutritional screening"
            ]
        }
    ],

    services: [
        {
            icon: Syringe,
            title: "Vaccination Services",
            desc: "Complete immunization according to national and international schedules."
        },
        {
            icon: HeartPulse,
            title: "Pediatric Health Screening",
            desc: "Routine health checks for early detection of medical conditions."
        },
        {
            icon: Activity,
            title: "Child Development Clinics",
            desc: "Specialized clinics for behavioral and developmental concerns."
        }
    ],

    info: [
        {
            title: "Preparation",
            text:
                "Please bring your child’s vaccination card and any previous medical reports."
        },
        {
            title: "Parental Guidance",
            text:
                "Our pediatricians provide counseling on nutrition, sleep, and healthy habits."
        }
    ],

    testimonials: [
        {
            text:
                "The pediatric team was incredibly kind and professional. My child felt safe and comfortable throughout the visit.",
            name: "Ayesha Khan",
            role: "Parent"
        },
        {
            text:
                "Excellent vaccination services and clear guidance for first-time parents.",
            name: "Usman Ali",
            role: "Parent"
        }
    ]
};

export default childSpecialistData;
