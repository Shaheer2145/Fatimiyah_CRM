import herobgImage from "../../../app/assets/herobgimage.png";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Dumbbell
} from "lucide-react";

const obesityData = {
  slug: "obesity",
  title: "Obesity & Weight Management Centre",
  subtitle:
    "Comprehensive weight management programs, from dietary counseling to advanced medical and surgical interventions.",
  herobgImage: herobgImage,

  conditions: [
    {
      icon: Stethoscope,
      title: "Medical Obesity Management",
      items: ["BMI assessment", "Metabolic disorders", "Lifestyle counseling"]
    },
    {
      icon: HeartPulse,
      title: "Cardio & Metabolic Care",
      items: ["Hypertension management", "Diabetes monitoring"]
    },
    {
      icon: Dumbbell,
      title: "Fitness & Exercise Plans",
      items: ["Personalized workouts", "Physiotherapy guidance"]
    }
  ],

  services: [
    {
      icon: Zap,
      title: "Bariatric Surgery",
      desc: "Surgical interventions for long-term weight reduction."
    },
    {
      icon: HeartPulse,
      title: "Nutrition & Diet Planning",
      desc: "Tailored diet plans for sustainable weight loss."
    },
    {
      icon: Activity,
      title: "Lifestyle Modification Programs",
      desc: "Comprehensive programs integrating exercise, diet, and counseling."
    }
  ],

  info: [
    {
      title: "Preparation",
      text:
        "Bring previous lab reports and medical history related to weight or metabolic conditions."
    },
    {
      title: "Post-Treatment",
      text:
        "Follow our diet and exercise plan for best results and attend follow-up consultations."
    }
  ],

  testimonials: [
    {
      text:
        "Thanks to the team, I lost 20 kg safely and improved my overall health.",
      name: "Fatima Khan",
      role: "Patient"
    }
  ]
};

export default obesityData;
