'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import Image from 'next/image';
import herobgImage from "../../assets/herobgimage.png";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroFrame}>
                <div className={styles.heroImage} >
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src={herobgImage} alt="image" className={styles.image} />
                    </motion.div>
                    <div className={styles.heroContent}>
                        <motion.h1
                            className={styles.headline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Health Solutions in <br />
                            every Stage of Life
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Link href="/login" className={styles.ctaButton}>
                                Make an Appointment
                            </Link>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
