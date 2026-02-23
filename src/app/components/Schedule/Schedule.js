'use client';
// Original code commented out to resolve build errors
/*
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

    return (
        <div className={styles.schedulePage}>
            <section className={styles.heroBanner}>
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
        </div>
    );
};

export default Schedule;
*/

export default function Schedule() {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Weekly Schedule</h1>
            <p>This page is temporarily disabled to resolve build errors.</p>
            <a href="/" style={{ color: '#2ecc71', textDecoration: 'underline' }}>Back to Home</a>
        </div>
    );
}
