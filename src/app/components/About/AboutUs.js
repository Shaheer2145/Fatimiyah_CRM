'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import styles from './AboutUs.module.css';
import Image from 'next/image';
import aboutImg from "../../assets/AboutSectionImage.png";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className={`section-padding ${styles.aboutSection}`}>
            <div className={`${styles.container} ${styles.aboutContent}`}>
                {/* Left Column: Text */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className={styles.subHead}> About Us</p>
                    <h2 className={styles.heading}>
                        Fatimiyah Hospital Karachi<br />
                        Excellence with Quality at its Best!
                    </h2>
                    <p className={styles.description}>
                        Started with a modest outpatient facility in July 2006,
                        Fatimiyah Hospital today stands as a 106-bedded multi-disciplinary,
                        secondary health care facility, constructed on a 2000 square yards land,
                        located in Soldier Bazar. Today, Alhamdulillah,
                        Fatimiyah Hospital Karachi enjoys a respectable status,
                        not only in the community,
                        but also amongst the general public at large ensuring nominal and affordable
                        healthcare within the reach of a common man.
                    </p>

                    <ul className={styles.featureList}>
                        <li><CheckCircle size={18} className={styles.icon} /> 24/7 Emergency</li>
                        <li><CheckCircle size={18} className={styles.icon} /> 24/7 Consultants</li>
                        <li><CheckCircle size={18} className={styles.icon} /> 24/7 Pharmacy</li>
                        <li><CheckCircle size={18} className={styles.icon} /> 24/7 Laboratory</li>
                    </ul>
                </motion.div>


                <motion.div
                    className={styles.imagePlaceholder}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Image src={aboutImg} alt="Doctor's image" className={styles.responsiveImage} />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutUs;
