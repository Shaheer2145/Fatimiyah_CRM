import herobgImage from "../../../app/assets/herobgimage.png";
import {
  Stethoscope,
  Zap,
  HeartPulse,
  Activity
} from "lucide-react";

const urologistData = {
  slug: "urologist",
  title: "Urology & Kidney Care Centre",
  subtitle: "Comprehensive care for urinary tract, kidneys, and male reproductive health.",
  herobgImage: herobgImage,

  conditions: [
    {
      icon: Stethoscope,
      title: "Kidney & Urinary Health",
      items: ["Kidney stones", "Urinary infections", "Prostate health"]
    },
    {
      icon: HeartPulse,
      title: "Male Reproductive Health",
      items: ["Erectile dysfunction", "Fertility issues"]
    },
    {
      icon: Activity,
      title: "Bladder Disorders",
      items: ["Incontinence", "Overactive bladder", "UTI management"]
    }
  ],

  services: [
    {
      icon: Zap,
      title: "Laser Stone Surgery",
      desc: "Minimally invasive removal of kidney stones."
    },
    {
      icon: HeartPulse,
      title: "Prostate Evaluation & Treatment",
      desc: "Screening, diagnostics, and treatment for prostate conditions."
    },
    {
      icon: Activity,
      title: "Urinary Tract Diagnostics",
      desc: "Ultrasound, urine tests, and advanced imaging for UTI and kidney issues."
    }
  ],

  info: [
    {
      title: "Preparation",
      text: "Bring previous urine tests, kidney scans, or medical records."
    },
    {
      title: "Follow-Up",
      text: "Attend all follow-up appointments to monitor kidney and urinary health."
    }
  ],

  testimonials: [
    {
      text: "The urologist helped me resolve my kidney stone problem safely.",
      name: "Ahmed Raza",
      role: "Patient"
    }
  ]
};

export default urologistData;
