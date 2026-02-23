'use client';
import React from 'react';
import { motion } from 'framer-motion';
import pyscho from "../../assets/psychatry.svg";
import eye from "../../assets/eye.svg";
import heart from "../../assets/heart.svg";
import shield from "../../assets/immune.svg";
import flask from "../../assets/blood.svg";
import activity from "../../assets/gastro.svg";
import stethoscope from "../../assets/ortho.svg";
import microscope from "../../assets/pulmonary.svg";
import styles from './MedicalDepartments.module.css';
import Image from 'next/image';
import Link from 'next/link';

const departments = [
    { name: 'Psychiatry', icon: pyscho, desc: 'In its ongoing attempts to define, understand, and categorize disorders...' },
    { name: 'Ophthalmology', icon: eye, desc: 'Our mission is to improve quality of life through the enhancement of vision...' },
    { name: 'Cardiology', icon: heart, desc: 'Our areas of expertise make the department a national cardiac referral centre...' },
    { name: 'Immunology', icon: shield, desc: 'The immune system provides the defense for an organism to repel invasion..' },
    { name: 'Hematology', icon: flask, desc: 'In the medical field, hematology includes the treatment of blood...' },
    { name: 'Gastroenterology', icon: activity, desc: 'With nationally and internationally known experts in gastroenterology...' },
    { name: 'Orthopedics', icon: stethoscope, desc: 'We have a diverse team of clinicians, administrators, and researchers...' },
    { name: 'Pulmonary', icon: microscope, desc: 'Medical is one of the leading medical facilities in America for the diagnosis...' },
];

const MedicalDepartmentsDuplicate = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subTitle}>Areas we deal with
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="16" viewBox="0 0 45 16" fill="none">
                            <path d="M0.5 7.35063C2.96533 7.35063 7.41736 7.35063 9.78826 6.93211C13.5507 6.26797 13.5669 3.52904 13.8021 3.02356C14.0581 2.47342 14.4679 4.2465 14.76 4.9724C15.0937 5.80178 15.1319 6.58244 15.3665 7.22743C15.6034 7.87865 15.7959 8.71547 15.9337 9.38159C16.0638 10.0104 16.5772 10.5683 16.6968 11.1142C16.8817 11.9579 16.9314 8.9667 17.2036 8.13813C17.4483 7.3932 18.3369 6.83126 18.7093 6.12528C19.1231 5.34102 19.51 4.45666 19.7657 3.6293C19.8745 3.27728 20.059 2.96378 20.215 2.88165C21.1168 2.40695 20.723 4.93013 21.0169 5.67717C21.3145 6.43383 21.5442 7.34579 21.682 8.29333C21.8033 9.1271 22.2856 9.64309 22.776 10.2669C22.9032 10.4288 22.9519 10.648 23.0306 10.5912C23.8745 9.98172 23.6159 8.28307 24.6113 6.8524C25.3581 5.77904 25.8848 4.85766 26.1593 4.07256C26.4473 3.24873 26.4338 2.68235 26.4532 2.46011C26.5551 1.28939 27.8767 7.01002 28.407 9.09655C28.7116 10.295 29.2071 11.3316 29.5807 12.1185C30.0374 13.0803 30.3814 14.1495 30.7521 15.0542C30.9134 15.4479 31.0841 15.6798 31.1832 15.3247C31.5372 14.0567 31.4771 12.3498 31.8273 10.805C32.2678 8.86149 33.001 6.79744 33.4303 5.02796C33.8526 3.28781 34.2914 2.44441 34.6252 0.854301C34.6973 0.510851 34.7231 0.308965 34.8205 0.764317C35.6102 4.45728 35.3871 7.18395 35.5056 7.95213C35.531 8.11675 35.6218 8.27341 35.7971 8.29576C36.795 8.42289 37.2641 7.07282 37.6354 6.606C37.9298 6.23595 38.2812 7.38928 38.5346 7.59098C39.0734 8.01984 39.6104 6.82763 39.8837 6.84696C40.172 6.86734 40.4304 7.34942 40.9765 7.51066C42.3051 7.47141 43.5592 7.43155 44.0079 7.37116C44.2243 7.35063 44.4179 7.35063 44.5 7.47141" stroke="#D0474F" stroke-linecap="round" />
                        </svg>
                    </span>
                    <div className={styles.heading}>
                        <h2 className={styles.title}>Medical Department</h2>
                        <Link href={'/'} className={styles.link} >View All</Link>
                    </div>

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
                                <Image src={dept.icon} alt={dept.name} width={56} height={56} className={styles.img} />
                            </div>
                            <h3 className={styles.cardTitle}>{dept.name}</h3>
                            <p className={styles.cardDesc}>{dept.desc}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalDepartmentsDuplicate;
