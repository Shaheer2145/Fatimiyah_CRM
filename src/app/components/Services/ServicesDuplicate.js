'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesDuplicate.module.css';
import Image from 'next/image';
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

const services = [
    {
        title: '24/7 Priority',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..',
        img: service1
    },
    {
        title: 'Surgery Specialist',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        img: service2
    },
    {
        title: 'Patient Care',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        img: service3
    }
];

const ServicesDuplicate = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <span className={styles.subTitle}>Services</span>
                    </div>
                    <div className={styles.headerBox}>
                        <h2 className={styles.title}>We Serve 24/7</h2>
                        <button className={styles.btnAll}>
                            See All cases
                            <div className={styles.arrowBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M24.9319 11.92L19.7273 6.79932C19.5594 6.57546 19.3355 6.46354 19.0557 6.46354C18.7759 6.46354 18.538 6.56147 18.3421 6.75735C18.1463 6.95322 18.0483 7.19106 18.0483 7.47088C18.0483 7.7507 18.1603 7.97456 18.3841 8.14245L21.8259 11.5842H1.00735C0.72753 11.5842 0.489684 11.6822 0.29381 11.878C0.0979367 12.0739 0 12.3118 0 12.5916C0 12.8714 0.0979367 13.1092 0.29381 13.3051C0.489684 13.501 0.72753 13.5989 1.00735 13.5989H21.8259L18.3841 17.0407C18.1603 17.2086 18.0483 17.4324 18.0483 17.7123C18.0483 17.9921 18.1463 18.2299 18.3421 18.4258C18.538 18.6217 18.7759 18.7196 19.0557 18.7196C19.3355 18.7196 19.5594 18.6077 19.7273 18.3838L24.9319 13.2631C25.0998 13.0953 25.1837 12.8714 25.1837 12.5916C25.1837 12.3118 25.0998 12.0879 24.9319 11.92Z" fill="white" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={styles.card}
                        >
                            <Image src={service.img} alt={service.title} className={styles.image} width={100} height={100} />
                            <div className={styles.overlay}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDuplicate;
