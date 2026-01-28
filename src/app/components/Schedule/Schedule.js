'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Schedule.module.css';
import herobgImage from "../../assets/herobgimage.png";

// Import Icons (Same as MedicalDepartments)
import kidney from "../../assets/kidney.png";
import hand from "../../assets/Dermatology.png";
import stomach from "../../assets/Stomach.png";
import brain from "../../assets/Brain.png";
import leg from "../../assets/leg.png";
import eye from "../../assets/eye.png";
import ent from "../../assets/Ent.png";
import gynae from "../../assets/Pregnant.png";
import child from "../../assets/Child.png";
import dentist from "../../assets/dentist.png";
import obesity from "../../assets/obesity.png";

import scheduleData from '@/lib/mockData/weeklySchedule.json';

const departments = [
    { name: 'All', icon: null, slug: 'all' },
    { name: 'Dermatology', icon: hand, slug: 'dermatology' },
    { name: 'ENT', icon: ent, slug: 'ent' },
    { name: 'Gynecology', icon: gynae, slug: 'gynecology' },
    { name: 'Urology', icon: kidney, slug: 'urology' },
    { name: 'Neurology', icon: brain, slug: 'neurology' },
    { name: 'Orthopedics', icon: leg, slug: 'orthopedics' },
    { name: 'Gastroenterology', icon: stomach, slug: 'gastroenterology' },
    { name: 'Dentistry', icon: dentist, slug: 'dentistry' },
    { name: 'Obesity', icon: obesity, slug: 'obesity' },
    { name: 'Ophthalmology', icon: eye, slug: 'ophthalmology' },
    { name: 'Pediatrics', icon: child, slug: 'pediatrics' },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Schedule = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDept, setActiveDept] = useState('all');

    const filteredSchedule = scheduleData.map((dept) => {
       
        const matchedDepart = activeDept === "all" || dept.department.toLowerCase().includes(activeDept.toLocaleLowerCase());

        const filteredDoctors = dept.doctors.filter((dr) =>dr.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()));

        const searchDepart =  dept.department.toLocaleLowerCase().includes(searchQuery.toLowerCase());
        if(!matchedDepart) return false;
        if(!searchDepart && filteredDoctors.length ===0) return null;
        return{
            ...dept,
            doctors:filteredDoctors,
        };
    }).filter(Boolean);
    return (
        <div className={styles.schedulePage}>
            {/* Hero Section */}
            <section className={styles.heroBanner}>
                {/* Background Image Overlay */}
                <div className={styles.heroBg}>
                    <Image
                        src={herobgImage}
                        alt="Hospital Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.heroContent}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.subTitle}
                    >
                        Hospital Timings
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.mainTitle}
                    >
                        Weekly OPD Schedule
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.heroDesc}
                    >
                        Find your preferred specialist and view their availability throughout the week.
                        Our OPD services are designed for your convenience.
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <section className={styles.filterWrapper}>
                <div className={styles.searchBar}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search doctor or department..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className={styles.deptFilters}>
                    {departments.map((dept) => (
                        <button
                            key={dept.slug}
                            className={`${styles.deptBtn} ${activeDept === dept.slug ? styles.active : ''}`}
                            onClick={() => setActiveDept(dept.slug)}
                        >
                            {dept.icon && <Image src={dept.icon} alt={dept.name} className={styles.deptIcon} width={20} height={20} />}
                            {dept.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Schedule List */}
            <section className={styles.scheduleContainer}>
                <AnimatePresence mode='wait'>
                    {filteredSchedule.length > 0 ? (
                        filteredSchedule.map((dept, index) => (
                            <motion.div
                                key={dept.department}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={styles.timetableCard}
                            >
                                <div className={styles.cardHeader}>
                                    <h2 className={styles.deptName}>{dept.department}</h2>
                                </div>

                                <div className={styles.tableContainer}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Consultant</th>
                                                {daysOfWeek.map(day => (
                                                    <th key={day}>{day.substring(0, 3)}</th>
                                                ))}
                                                <th>Action</th>
                                                <th>Days</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dept.doctors.map((dr, drIdx) => (
                                                <tr key={drIdx}>
                                                    <td>
                                                        <span className={styles.drName}>{dr.name}</span>
                                                    </td>
                                                    {daysOfWeek.map(day => {
                                                        const timing = dr.timings[day] || (dr.timings['Daily'] ? dr.timings['Daily'] : null);
                                                        return (
                                                            <td key={day}>
                                                                {timing ? (
                                                                    <span className={styles.timeSlot}>{timing}</span>
                                                                ) : (
                                                                    <span className={styles.off}>Off</span>
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                                    <td>
                                                        <Link href={`/doctors`} className={styles.bookBtn}>
                                                            Book <ArrowRight size={14} />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <h3 className="text-2xl font-bold text-slate-400">No schedules found matching your criteria.</h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Schedule;
