import herobgImage from "../../../app/assets/herobgimage.png";
import {
  Baby,
  HeartPulse,
  Stethoscope,
  Zap,
  ShieldCheck
} from "lucide-react";

const gynecologyData = {
  slug: "gynecology",
  title: "Gynecology & Women's Health Centre",
  subtitle:
    "Comprehensive care for women at all stages of life, from routine checkups to advanced treatments.",
  herobgImage: herobgImage,

  conditions: [
    {
      icon: Stethoscope,
      title: "General Gynecology",
      items: ["Menstrual disorders", "Reproductive health", "Hormonal issues"]
    },
    {
      icon: Baby,
      title: "Obstetrics & Pregnancy Care",
      items: ["Prenatal care", "High-risk pregnancy management", "Labor & delivery"]
    },
    {
      icon: HeartPulse,
      title: "Fertility & IVF",
      items: ["Infertility evaluation", "IVF treatments", "Egg freezing"]
    }
  ],

  services: [
    {
      icon: Zap,
      title: "Laparoscopy",
      desc: "Minimally invasive procedures for gynecological conditions."
    },
    {
      icon: ShieldCheck,
      title: "Screening & Diagnostics",
      desc: "Pap smear, Ultrasound, Mammography, and other diagnostic services."
    },
    {
      icon: Baby,
      title: "Prenatal & Postnatal Care",
      desc: "Comprehensive care for mother and baby before and after delivery."
    }
  ],

  info: [
    {
      title: "Preparation",
      text: "Bring previous medical history and reports related to gynecology."
    },
    {
      title: "Follow-Up",
      text: "Attend regular checkups and follow your physician's advice."
    }
  ],

  testimonials: [
    {
      text:
        "The gynecologist was professional and caring throughout my pregnancy.",
      name: "Ayesha Malik",
      role: "Patient"
    }
  ]
};

export default gynecologyData;
