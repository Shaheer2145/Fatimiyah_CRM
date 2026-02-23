'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import styles from './AboutDuplicate.module.css';
import aboutImg from "../../assets/aboutImg.png";
import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";


const AboutDuplicate = () => {
    const avatars = [
        {
            id: 1,
            avatar: doctor1
        }, {
            id: 2,
            avatar: doctor2
        }, {
            id: 3,
            avatar: doctor3
        }, {
            id: 4,
            avatar: doctor4
        }
    ];

    return (
        <section className={styles.section}>

            <div className={styles.container}>
                <div className={styles.contentRow}>

                    {/* Left: Visuals */}

                    <div className={styles.imageArea}>
                        <div className={styles.bgDecoration}>
                            <div className={`${styles.circle} ${styles.c1}`}></div>
                            <div className={`${styles.circle} ${styles.c2}`}></div>
                        </div>

                        <div className={styles.mainImageWrapper}>
                            <div className={styles.gradientBg} />
                            <Image
                                src={aboutImg}
                                alt="About Us"
                                className={styles.image}
                            />
                        </div>


                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={styles.doctorsCard}
                        >
                            <div className={styles.avatarStack}>
                                {avatars.map((url, i) => (
                                    <div key={i} className={styles.avatar}>
                                        <Image
                                            src={url.avatar}
                                            alt="doc-image"
                                            className={styles.avatarImg}
                                        />
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
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={styles.experienceCard}
                        >
                            <div className={styles.trophyCircle}>
                                <span className={styles.insideCircle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M22.9 28.8C22.9 29.0666 22.8167 29.2833 22.65 29.45C22.4833 29.6166 22.2667 29.7 22 29.7H8C7.73333 29.7 7.51667 29.6166 7.35 29.45C7.18333 29.2833 7.1 29.0833 7.1 28.85C7.1 28.6166 7.18333 28.4 7.35 28.2C7.51667 28 7.73333 27.9 8 27.9H22C22.2667 27.9 22.4833 27.9833 22.65 28.15C22.8167 28.3166 22.9 28.5333 22.9 28.8ZM8.7 21.6V27H21.3V21.6H8.7ZM17.4 24.7H12.6C12.4667 24.7 12.35 24.6666 12.25 24.6C12.15 24.5333 12.1 24.4333 12.1 24.3C12.1 24.1666 12.15 24.05 12.25 23.95C12.35 23.85 12.4667 23.8 12.6 23.8H17.4C17.5333 23.8 17.65 23.85 17.75 23.95C17.85 24.05 17.9 24.1666 17.9 24.3C17.9 24.4333 17.8667 24.5333 17.8 24.6C17.7333 24.6666 17.6 24.7 17.4 24.7ZM8.8 14C8.73333 13.9333 8.66667 13.9 8.6 13.9L8 13.7C5.53333 12.5666 3.58333 10.95 2.15 8.84995C0.716667 6.74995 0 4.49995 0 2.09995V1.59995C0 1.53328 0.05 1.44995 0.15 1.34995C0.25 1.24995 0.366667 1.19995 0.5 1.19995H4.7L4.8 2.99995H2.4C2.2 2.99995 2.06667 3.04995 2 3.14995C1.93333 3.24995 1.9 3.39995 1.9 3.59995C2.1 5.06662 2.65 6.46662 3.55 7.79995C4.45 9.13328 5.63333 10.2333 7.1 11.1C7.43333 11.9 8 12.8666 8.8 14ZM24.4 0.299952V0.699951C24.3333 1.89995 24.2667 2.79995 24.2 3.39995C23.8667 6.06662 23.1333 8.49995 22 10.7C21.2 12.4333 20.1667 13.9333 18.9 15.2C17.5 16.6666 16.8 18.3666 16.8 20.3V20.6H13.2V20.3C13.2 18.4333 12.5 16.7666 11.1 15.3L10.5 14.5C9.1 12.9666 8 11.1666 7.2 9.09995C6.2 6.49995 5.66667 3.56662 5.6 0.299952H24.4ZM30 1.59995V2.09995C30 4.56662 29.2833 6.83328 27.85 8.89995C26.4167 10.9666 24.4667 12.5666 22 13.7L21.2 14.1C21.9333 13.1 22.5333 12.1333 23 11.2C24.4 10.2666 25.55 9.13328 26.45 7.79995C27.35 6.46662 27.9 5.06662 28.1 3.59995C28.1 3.39995 28.05 3.24995 27.95 3.14995C27.85 3.04995 27.7667 2.99995 27.7 2.99995H25.2L25.4 1.19995H29.6C29.7333 1.19995 29.8333 1.24995 29.9 1.34995C29.9667 1.44995 30 1.53328 30 1.59995Z" fill="white" />
                                    </svg>
                                </span>

                            </div>
                            <div className={styles.expText}>
                                <span className={styles.expValue}>30+</span>
                                <span className={styles.expLabel}>Years Of Experience</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.textContent}
                    >
                        <span className={styles.badge}>About Fatmiyah</span>

                        <h2 className={styles.title}>
                            Fatimiyah Hospital Karachi <br />
                            Excellence with Quality at its Best!
                        </h2>

                        <p className={styles.description}>
                            Started with a modest outpatient facility in July 2006,
                            Fatimiyah Hospital today stands as a 106-bedded multi-disciplinary, secondary health care facility,
                            constructed on a 2000 square yards land, located in Soldier Bazar. Today, Alhamdulillah,
                            Fatimiyah Hospital Karachi enjoys a respectable status, not only in the community,
                            but also amongst the general public at large ensuring nominal and affordable healthcare within the reach of a common man.
                        </p>

                        <button className={styles.btn}>
                            Read More
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutDuplicate;
