import dentistData from "./dentistData";
import dermatologyData from "./dermatologyData";
import entData from "./entData";
import eyeData from "./eyeData";
import gynecologyData from "./gyneData";
import gastroData from "./gastroData";
import neurologyData from "./neuroData";
import obesityData from "./obesityData";
import urologistData from "./urologistData";
import childSpecialistData from "./childData";
import orthopedicSurgeonData from "./orthoData";

const departments = {
    dermatology: dermatologyData,
    ent: entData,
    dentistry: dentistData,
    gynecology: gynecologyData,
    ophthalmology: eyeData,
    gastroenterology: gastroData,
    neurology: neurologyData,
    obesity: obesityData,
    urology: urologistData,
    pediatrics: childSpecialistData,
    orthopedics: orthopedicSurgeonData
};

export default departments;