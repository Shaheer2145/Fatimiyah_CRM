'use client';
import React from 'react';
import Image from 'next/image';
import { Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import aboutImg from "../../assets/AboutSectionImage.png";

// Mock avatar images (can be replaced with real assets if available)
const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
];

const AboutUs = () => {
    return (
        <section className={styles.section}>
            {/* Background Decoration */}
            <div className={styles.bgDecoration}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.contentWrapper}>

                    {/* Left: Image Section with Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.imageWrapperParent}
                    >
                        <div className={styles.imageWrapper}>
                            {/* Organic Shaped Main Image */}
                            <div className={styles.mainImageContainer}>
                                <Image
                                    src={aboutImg}
                                    alt="About Fatimiyah"
                                    className={styles.image}
                                    priority
                                />
                            </div>

                            {/* Floating Card: Available Doctors */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className={styles.doctorsCard}
                            >
                                <div className={styles.avatarStack}>
                                    {avatars.map((url, i) => (
                                        <div key={i} className={styles.avatar}>
                                            <img src={url} alt="doctor" />
                                        </div>
                                    ))}
                                    <div className={styles.plusBadge}>95+</div>
                                </div>
                                <span className={styles.cardLabel}>Available Doctors</span>
                            </motion.div>

                            {/* Floating Card: Experience */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                                className={styles.experienceCard}
                            >
                                <div className={styles.trophyIconWrapper}>
                                    <Trophy size={28} />
                                </div>
                                <div className={styles.expText}>
                                    <span className={styles.expValue}>30+</span>
                                    <span className={styles.expLabel}>Years Of Experience</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.textContent}
                    >
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>About Fatimyah</span>
                        </div>

                        <div className={styles.titleContainer}>
                            <h2 className={styles.title}>
                                Fatimiyah Hospital Karachi <br />
                                <span className={styles.accentTitle}>Excellence with Quality</span> at its Best!
                            </h2>
                            <div className={styles.titleLine}></div>
                        </div>

                        <p className={styles.desc}>
                            Started with a modest outpatient facility in July 2006, Fatimiyah Hospital today stands as a
                            <span className={styles.highlight}> 106-bedded multi-disciplinary</span> secondary health care facility,
                            constructed on a 2000 square yards land, located in Soldier Bazar.
                        </p>

                        <p className={styles.italicDesc}>
                            "We believe in treating not just the illness, but the whole person. Our compassionate approach combined
                            with advanced medical technology makes us a trusted healthcare partner for families across the region."
                        </p>

                        <button className={styles.btn}>
                            Learn More About Us
                            <Award size={20} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
