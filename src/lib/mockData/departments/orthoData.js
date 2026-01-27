import herobgImage from "../../../app/assets/herobgimage.png";
import {
  Bone,
  Activity,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Dumbbell
} from "lucide-react";

const orthopedicSurgeonData = {
  slug: "orthopedic-surgeon",
  title: "Orthopedic Surgery & Joint Care Centre",
  subtitle:
    "Advanced care for bones, joints, and muscles, helping you regain mobility and live pain-free.",
  herobgImage: herobgImage,

  conditions: [
    {
      icon: Bone,
      title: "Bone & Joint Disorders",
      items: [
        "Arthritis",
        "Osteoporosis",
        "Joint pain"
      ]
    },
    {
      icon: Activity,
      title: "Sports Injuries",
      items: [
        "Ligament injuries",
        "Muscle tears",
        "Fractures"
      ]
    },
    {
      icon: Dumbbell,
      title: "Spine & Back Problems",
      items: [
        "Back pain",
        "Slipped disc",
        "Posture issues"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Trauma & Fracture Care",
      items: [
        "Accident injuries",
        "Emergency fracture management",
        "Rehabilitation support"
      ]
    }
  ],

  services: [
    {
      icon: HeartPulse,
      title: "Joint Replacement Surgery",
      desc: "Advanced knee and hip replacement procedures using modern techniques."
    },
    {
      icon: Stethoscope,
      title: "Orthopedic Consultation",
      desc: "Detailed assessment and personalized treatment plans."
    },
    {
      icon: Activity,
      title: "Physiotherapy & Rehabilitation",
      desc: "Post-surgical and non-surgical rehabilitation for faster recovery."
    }
  ],

  info: [
    {
      title: "Preparation",
      text:
        "Please bring previous X-rays, MRI reports, or medical records related to your condition."
    },
    {
      title: "Recovery",
      text:
        "Our team provides guided rehabilitation programs to ensure safe and effective recovery."
    }
  ],

  testimonials: [
    {
      text:
        "After my knee surgery, I can walk pain-free again. The orthopedic team was outstanding.",
      name: "Imran Siddiqui",
      role: "Patient"
    },
    {
      text:
        "Professional doctors and excellent post-surgery care. Highly recommended for joint issues.",
      name: "Nadia Farooq",
      role: "Patient"
    }
  ]
};

export default orthopedicSurgeonData;
