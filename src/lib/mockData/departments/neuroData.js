import herobgImage from "../../../app/assets/herobgimage.png";
import {
  Brain,
  Activity,
  Stethoscope,
  HeartPulse,
  Zap
} from "lucide-react";

const neurologyData = {
  slug: "neurology",
  title: "Neurology & Brain Health Centre",
  subtitle:
    "Advanced care for neurological disorders, brain, and nervous system diseases.",
  herobgImage: herobgImage,

  conditions: [
    {
      icon: Brain,
      title: "Brain & Nervous System",
      items: ["Stroke", "Migraine", "Seizures", "Parkinson's disease"]
    },
    {
      icon: Activity,
      title: "Neuro Rehabilitation",
      items: ["Post-stroke therapy", "Cognitive therapy", "Mobility improvement"]
    },
    {
      icon: Stethoscope,
      title: "Peripheral Neuropathy",
      items: ["Nerve pain", "Diabetic neuropathy", "Muscle weakness"]
    }
  ],

  services: [
    {
      icon: Zap,
      title: "EEG & Brain Mapping",
      desc: "Advanced diagnostics for neurological conditions."
    },
    {
      icon: HeartPulse,
      title: "Stroke Management",
      desc: "Comprehensive acute and post-stroke care."
    },
    {
      icon: Activity,
      title: "Neuro Rehabilitation Programs",
      desc: "Tailored therapy to improve mobility and daily function."
    }
  ],

  info: [
    {
      title: "Preparation",
      text:
        "Bring previous MRI, CT scan, or EEG reports and any medical records."
    },
    {
      title: "Follow-Up",
      text:
        "Regular visits and therapy sessions are crucial for effective recovery."
    }
  ],

  testimonials: [
    {
      text:
        "The neurology team helped my father recover mobility after his stroke.",
      name: "Ali Shah",
      role: "Patient"
    }
  ]
};

export default neurologyData;
