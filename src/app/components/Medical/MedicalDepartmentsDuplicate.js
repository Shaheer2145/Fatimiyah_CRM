'use client';
import React from 'react';
import { motion } from 'framer-motion';
import pyscho from "../../assets/psychatry.png";
import eye from "../../assets/opthalmology.png";
import heart from "../../assets/Cardiology.png";
import shield from "../../assets/immunology.png";
import flask from "../../assets/hemato.png";
import activity from "../../assets/gastro.png";
import stethoscope from "../../assets/ortho.png";
import microscope from "../../assets/pulmonary.png";
import { MoveRight } from 'lucide-react';
import styles from './MedicalDepartmentsDuplicate.module.css';
import Image from 'next/image';

const departments = [
    { name: 'Psychiatry', icon: pyscho, desc: 'We have more doctor for your dental illness. We are here for your better treatment' },
    { name: 'Ophthalmology', icon: eye, desc: 'Our areas of expertise make the department a national cardiac referral centre...' },
    { name: 'Cardiology', icon: heart, desc: 'Our areas of expertise make the department a national cardiac referral centre...' },
    { name: 'Immunology', icon: shield, desc: 'The immune system provides the defense for an organism to repel invasion..' },
    { name: 'Hematology', icon: flask, desc: 'We have more doctor for your dental illness. We are here for your better treatment' },
    { name: 'Gastroenterology', icon: activity, desc: 'Our areas of expertise make the department a national cardiac referral centre...' },
    { name: 'Orthopedics', icon: stethoscope, desc: 'We have a diverse team of clinicians, administrators, and researchers...' },
    { name: 'Pulmonary', icon: microscope, desc: 'Medical is one of the leading medical facilities in America for the diagnosis...' },
];

const MedicalDepartmentsDuplicate = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subTitle}>Areas we deal with</span>
                    <h2 className={styles.title}>Medical Departments</h2>
                </div>

                <div className={styles.grid}>
                    {departments.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                <Image src={dept.icon} alt={dept.name} width={56} height={56} />
                            </div>
                            <h3 className={styles.cardTitle}>{dept.name}</h3>
                            <p className={styles.cardDesc}>{dept.desc}</p>
                            <div className={styles.arrow}><MoveRight size={30} /></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalDepartmentsDuplicate;
