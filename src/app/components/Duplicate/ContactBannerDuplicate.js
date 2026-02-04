'use client';
import React from 'react';
import { Phone } from 'lucide-react';
import styles from './ContactBannerDuplicate.module.css';

const ContactBannerDuplicate = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>

                    <div className={styles.contactInfo}>
                        <div className={styles.iconCircle}>
                            <Phone size={40} fill="currentColor" />
                        </div>
                        <div className={styles.textGroup}>
                            <span className={styles.subText}>MORNING 24/7</span>
                            <span className={styles.number}>(208) 555-0112</span>
                        </div>
                        <div className={styles.indicator247}>
                            24/7 <br /> Support
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=400&q=80"
                            alt="Doctor"
                            className={styles.doctorImg}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactBannerDuplicate;
