'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Schedule.module.css';

// Existing assets
import herobgImage from "../../assets/HeroImageORg.png";

const Schedule = ({ scheduleData, appointmentData, heroData }) => {
    if (scheduleData) {
        console.log("schedule data has been connected", scheduleData);
    }
    else {
        console.log("No connection", null);

    }
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const heroNodes = heroData?.richText?.root?.children;
    console.log("heroNodes", heroNodes);



    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');



    const introContent = scheduleData?.introContent?.root?.children?.[0]?.children?.[0]?.text;
    const subHead = scheduleData?.introContent?.root?.children?.[1]?.children?.[0]?.text;



    const scheduleCards = scheduleData?.selectedDocs?.map((item) => {
        const card = item.value ? item?.value : item;
        return {
            name: card.name,
            title: card.title,
            department: card.department,
            specialty: card.specialty,
            schedule: card.schedule,
            id: card.id
        };
    });



    const departments = ['All', 'Cardiology', 'Gynecology', 'Pediatrics', 'Dermatology', 'Urology', 'ENT', 'Neurology'];

    const filteredDoctors = scheduleCards.filter(dr => {
        const matchesSearch = dr.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDept = selectedDept === 'All' || dr.department === selectedDept;
        return matchesSearch && matchesDept;
    });

    if (appointmentData) {
        console.log("appointment data has been connected", appointmentData);
    }
    else {
        console.log("No connection", null);
    }
    const appointmentTitle = appointmentData?.form?.title;
    const appointmentSubtitle = appointmentData?.introContent?.root?.children?.[0]?.children?.[0]?.text;
    const submitLabel = appointmentData?.form?.submitButtonLabel;



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.schedulePage}>
            {/* --- Hero Section --- */}
            <section className={styles.heroSection}>
                <div className={styles.heroBg}>
                    <Image
                        src={herobgImage}
                        alt="Fatimiyah Hospital"
                        fill
                        className={styles.bgImg}
                        unoptimized
                    />
                </div>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroLeft}>
                            <motion.span
                                className={styles.heroBadge}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {heroNodes[0]?.children[0]?.text}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {heroNodes[1]?.children[0]?.text}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {heroNodes[2]?.children[0]?.text}
                            </motion.p>
                        </div>

                        <motion.div
                            className={styles.heroRight}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >

                            <div className={styles.appointmentCard}>
                                <h2 className={styles.cardTitle}>{appointmentTitle}</h2>
                                <p className={styles.cardSubtitle}>{appointmentSubtitle}</p>
                                {appointmentData?.form?.fields ? (
                                    <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
                                        {appointmentData?.form?.fields?.map((field, index) => {
                                            // return (
                                            //     <>
                                            //         <div className={styles.inputGroup} key={index}>
                                            //             <label>{field.label}</label>
                                            //             <input type="text" placeholder="Enter your name" className={styles.inputField} />
                                            //         </div>
                                            //         <div className={styles.inputGroup} key={index}>
                                            //             <label>{field.label}</label>
                                            //             <input type="tel" placeholder="+92 XXX XXXXXXX" className={styles.inputField} />
                                            //         </div>
                                            //         <div className={styles.inputGroup} key={index}>
                                            //             <label>{field.label}</label>
                                            //             <select className={styles.selectField}>
                                            //                 {field?.options?.map(dept => (
                                            //                     <option key={dept} value={dept}>{dept}</option>
                                            //                 ))}
                                            //             </select>
                                            //         </div>
                                            //         <div className={styles.inputGroup} key={index}>
                                            //             <label>{field.label}</label>
                                            //             <input type="date" className={styles.inputField} />
                                            //         </div>

                                            //     </>
                                            // )
                                            switch (field.blockType) {
                                                case 'text':
                                                    return (
                                                        <div key={field.id} className={styles.inputGroup}>
                                                            <label>{field.label}</label>
                                                            <input type="text" placeholder={field.label} className={styles.inputField} required={field.required} />
                                                        </div>
                                                    );
                                                case 'number':
                                                    return (
                                                        <div key={field.id} className={styles.inputGroup}>
                                                            <label>{field.label}</label>
                                                            <input type="tel" placeholder={field.label} className={styles.inputField} required={field.required} />
                                                        </div>
                                                    );
                                                case 'select':
                                                    return (
                                                        <div key={field.id} className={styles.inputGroup}>
                                                            <label>{field.label}</label>
                                                            <select className={styles.selectField} required={field.required}>
                                                                <option value="">Select...</option>
                                                                {field.options?.map((opt) => (
                                                                    <option key={opt.id} value={opt.value}>{opt.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })}
                                        <button type="submit" className={styles.submitBtn} >{submitLabel}</button>
                                    </form>
                                ) : (
                                    <p>Loading form.............</p>
                                )}

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Search & Filter Bar --- */}
            <section className={styles.searchBarSection}>
                <div className={styles.container}>
                    <div className={styles.searchBarWrapper}>
                        <div className={styles.searchGroup}>
                            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by Doctor's Name..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select
                            className={styles.filterSelect}
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* --- Schedule Grid --- */}
            <section className={styles.scheduleGridSection}>
                <div className={styles.container}>
                    <div className={styles.gridHeader}>
                        <h2>{introContent}</h2>
                        <p>{subHead}</p>
                    </div>

                    <motion.div
                        className={styles.doctorGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {scheduleCards.map((card) => (
                            <motion.div key={card.id} className={styles.doctorCard} variants={itemVariants}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.drName}>{card.name}</h3>
                                    <span className={styles.drTitle}>{card.title}</span>
                                </div>
                                <div className={styles.specialtyBadge}>{card.specialty}</div>

                                <table className={styles.scheduleTable}>
                                    <tbody>
                                        {card.schedule.map((slot, idx) => (
                                            <tr key={idx}>
                                                <td className={styles.dayCell}>{slot.days}</td>
                                                <td className={styles.timeCell}>{slot.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <a href="#" className={styles.bookNowBtn} onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>
                                    Book Consultation
                                </a>
                            </motion.div>
                        ))}

                        {filteredDoctors.length === 0 && (
                            <div className={styles.noResults}>
                                <p>No doctors found matching your search criteria.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Schedule;
