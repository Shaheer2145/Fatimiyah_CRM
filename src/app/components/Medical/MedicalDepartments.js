"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from './MedicalDepartments.module.css';
import kidney from "../../assets/kidney.png";
import hand from "../../assets/Dermatology.png";
import stomach from "../../assets/Stomach.png";
import brain from "../../assets/Brain.png";
import leg from "../../assets/leg.png";
import eye from "../../assets/eye.png";
import ent from "../../assets/Ent.png";
import gynae from "../../assets/Pregnant.png";
import child from "../../assets/Child.png";
import dentist from "../../assets/dentist.png";
import obesity from "../../assets/obesity.png";
import DoctorList from '../DoctorList/DoctorList';
import { motion } from 'framer-motion';




const departments = [
    { name: 'Dermatologist', icon: hand, slug: 'dermatology' },
    { name: 'ENT Specialist', icon: ent, slug: 'ent' },
    { name: 'Gynecologist', icon: gynae, slug: 'gynecology' },
    { name: 'Urologist', icon: kidney, slug: 'urology' }, // Kidney/Urine -> Droplet
    { name: 'Neurologist', icon: brain, slug: 'neurology' },
    { name: 'Orthopedic Surgeon', icon: leg, slug: 'orthopedics' },
    { name: 'Gastroenterologist', icon: stomach, slug: 'gastroenterology' }, // Stomach/Food -> Utensils
    { name: 'Dentist', icon: dentist, slug: 'dentistry' },
    { name: 'Obesity Specialist', icon: obesity, slug: 'obesity' }, // Surgery -> Scissors
    { name: 'Eye Specialist', icon: eye, slug: 'ophthalmology' },
    { name: 'Child Specialist', icon: child, slug: 'pediatrics' },
    // { name: 'General Physician', icon: ShieldPlus, slug: 'general-medicine' },
];

const MedicalDepartments = () => {


    return (
        <section className={`section - padding ${styles.deptSection} `}>
            <div className={styles.deptContainer}>
                <div className={styles.headerRow}>
                    <h2 className={styles.sectionTitle}>Medical Department</h2>
                    <Link href="/departments" className={styles.viewAll}>view all</Link>
                </div>

                <div className={styles.grid}>

                    {departments.map((dept, index) => (
                       
                        <Link key={index} href={`/departments/${dept.slug}`}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                            >
                                <div className={styles.iconBox}>
                                    <Image
                                        src={dept.icon}
                                        alt={dept.name}
                                        width={87}
                                        height={87}

                                    />

                                </div>
                                <h3 className={styles.cardTitle}>{dept.name}</h3>
                            </motion.div>
                        </Link>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default MedicalDepartments;
