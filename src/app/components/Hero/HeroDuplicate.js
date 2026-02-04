'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './HeroDuplicate.module.css';
import heroDoc from "../../assets/HeroDoc.png";

const HeroDuplicate = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.contentRow}>

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.textContent}
                    >
                        <span className={styles.badge}>We are Here for You</span>

                        <h1 className={styles.title}>
                            Helping People Lead <br />
                            Healthy & Happy Lives
                        </h1>

                        <p className={styles.description}>
                            With healthcare services available 24/7, Fatimiyah Hospital is dedicated to providing high-quality medical care to our community. Our experienced team of doctors and medical staff are here to ensure your well-being.
                        </p>

                        <button className={styles.primaryBtn}>
                            Make Appointment
                            <div className={styles.arrowBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M24.9319 11.92L19.7273 6.79932C19.5594 6.57546 19.3355 6.46354 19.0557 6.46354C18.7759 6.46354 18.538 6.56147 18.3421 6.75735C18.1463 6.95322 18.0483 7.19106 18.0483 7.47088C18.0483 7.7507 18.1603 7.97456 18.3841 8.14245L21.8259 11.5842H1.00735C0.72753 11.5842 0.489684 11.6822 0.29381 11.878C0.0979367 12.0739 0 12.3118 0 12.5916C0 12.8714 0.0979367 13.1092 0.29381 13.3051C0.489684 13.501 0.72753 13.5989 1.00735 13.5989H21.8259L18.3841 17.0407C18.1603 17.2086 18.0483 17.4324 18.0483 17.7123C18.0483 17.9921 18.1463 18.2299 18.3421 18.4258C18.538 18.6217 18.7759 18.7196 19.0557 18.7196C19.3355 18.7196 19.5594 18.6077 19.7273 18.3838L24.9319 13.2631C25.0998 13.0953 25.1837 12.8714 25.1837 12.5916C25.1837 12.3118 25.0998 12.0879 24.9319 11.92Z" fill="white" />
                                </svg>
                            </div>

                        </button>
                    </motion.div>

                    {/* Right: Image & Shape */}
                    <div className={styles.imageContent}>
                        <div className={styles.organicShape}></div>
                        <Image
                            src={heroDoc}
                            alt="Doctor hero"
                            width={500}
                            height={600}
                            className={styles.heroImage}
                            priority
                        />
                    </div>

                </div>
                <div className={styles.formContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className={styles.searchBar}
                    >
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Your Name</label>
                            <input type="text" placeholder="Name" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Find doctor</label>
                            <input type="text" placeholder="Email" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Select Department</label>
                            <select className={styles.select}>
                                <option>Department</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Choose Doctor</label>
                            <select className={styles.select}>
                                <option>Doctor</option>
                            </select>
                        </div>

                        <button className={styles.searchBtn}>
                            Continue
                        </button>
                    </motion.div>
                </div>

                {/* Bottom: Floating Search Bar */}

            </div>
        </section>
    );
};

export default HeroDuplicate;
