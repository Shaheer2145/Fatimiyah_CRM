'use client';

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { FileText } from 'lucide-react';

// import { ScheduleModal } from '@/app/components/DoctorList/DoctorModals';
// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DepartmentPage = () => {
    const params = useParams();
    const { slug } = params;

    const department = departments[slug];

    if (!department) {
        return (
            <main className={styles.dermatologyPage}>
                <Header />
                <div style={{ padding: '100px', textAlign: 'center' }}>
                    <h2>Department Not Found</h2>
                    <p>The requested department could not be found.</p>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className={styles.dermatologyPage}>
            <Header />

            {/* 1. Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    {/* Using department specific hero image if available, otherwise fallback could be added */}
                    {department.herobgImage && (
                        <Image src={department.herobgImage} alt={department.title} fill style={{ objectFit: 'cover' }} priority />
                    )}
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 className={styles.headline} variants={fadeInUp}>
                            {department.title}
                        </motion.h1>
                        <motion.p className={styles.subHeadline} variants={fadeInUp}>
                            {department.subtitle}
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link href="/openSchedule(doc)" className={styles.ctaButton} onClick={() => openSchedule(doc)}>
                                Book Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Conditions We Treat */}
            {department.conditions && (
                <section className={styles.section}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Conditions We Treat
                    </motion.h2>
                    <motion.div
                        className={styles.conditionsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {department.conditions.map((cond, index) => (
                            <motion.div key={index} className={styles.conditionCard} variants={cardVariant} whileHover={{ y: -5 }}>
                                <div className={styles.conditionIcon}>
                                    {cond.icon && (typeof cond.icon === 'string' ? <Image src={cond.icon} width={40} height={40} alt="" /> : <cond.icon size={40} />)}
                                </div>
                                <h3 className={styles.conditionTitle}>{cond.title}</h3>
                                {cond.items && (
                                    <ul className={styles.conditionList}>
                                        {cond.items.map((subItem, i) => (
                                            <li key={i}>{subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* 3. Services & Technology */}
            {department.services && (
                <section className={styles.section} style={{ backgroundColor: '#fff' }}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Services & Technology
                    </motion.h2>
                    <motion.div
                        className={styles.servicesGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {department.services.map((service, index) => (
                            <motion.div key={index} className={styles.serviceCard} variants={cardVariant} whileHover={{ scale: 1.02 }}>
                                <div style={{ color: '#D0474F', marginBottom: '1rem' }}>
                                    {service.icon && <service.icon size={32} />}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* 4. Patient Information & Online Reports */}
            {department.info && (
                <section className={styles.section}>
                    <motion.div
                        className={styles.infoSection}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {department.info.map((infoBlock, index) => (
                            <div key={index} className={styles.infoBlock}>
                                <h3>{infoBlock.title}</h3>
                                <p>{infoBlock.text}</p>
                                {/* Specific logic for Online Reports button if title matches */}
                                {infoBlock.title === "Online Reports" && (
                                    <Link href="/reports" className={styles.outlineButton}>
                                        <FileText size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                        View My Reports
                                    </Link>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* 5. Testimonials */}
            {department.testimonials && (
                <section className={styles.section}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.h2>
                    <motion.div
                        className={styles.testimonialsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {department.testimonials.map((testi, index) => (
                            <motion.div key={index} className={styles.testimonialCard} variants={cardVariant}>
                                <p className={styles.testimonialContent}>"{testi.text}"</p>
                                <div>
                                    <div className={styles.marketName}>{testi.name}</div>
                                    <div className={styles.marketRole}>{testi.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            <Footer />
        </main>
    );
};

export default DepartmentPage;
