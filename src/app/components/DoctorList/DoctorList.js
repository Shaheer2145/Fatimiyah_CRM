"use client";
import Image from "next/image";
import styles from "./DoctorList.module.css";
import { Search, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ProfileModal, ScheduleModal } from "./DoctorModals";
import doctors from "@/lib/mockData/doctors.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const DoctorList = ({ doctors }) => {
    const times = ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"];
    const feesRange = ["Fees below 1000", "1000-2000", "2000-3000", "3000+"];
    const placeholder = [
        "Search by symptoms",
        "Search by disease",
        "Search by Doctor name"
    ];
    const [cindex, setCindex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCindex(prev => prev + 1) % placeholder.length;
        }, 3000);
    }, []);

    // Modal State
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

    const openProfile = (doc) => {
        setSelectedDoc(doc);
        setProfileModalOpen(true);
    };

    const openSchedule = (doc) => {
        setSelectedDoc(doc);
        setScheduleModalOpen(true);
    };

    const closeModals = () => {
        setProfileModalOpen(false);
        setScheduleModalOpen(false);
        setSelectedDoc(null);
    };

    return (
        <>
            <Header />
            <section className={styles.box}>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.upper_section}
                >
                    <h1 className={styles.mainHeading}> {doctors.category}Doctors in Fatimiyah</h1>
                    <p className={styles.para}>Expert care across all specialties. Find and book your specialist today.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.filterSection}
                >
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder={placeholder[cindex]}
                        />
                        <Search />
                    </div>

                    <button className={styles.btn}>Clear Filters</button>
                    
                    <button className={styles.btn}>Fee upto 500</button>
                    <button className={styles.btn}>Top Reviewed</button>

                    <select className={styles.selectBox}>
                        <option value="">Choose Timestamp</option>
                        {times.map((time) => (
                            <option value={time} key={time}>{time}</option>
                        ))}
                    </select>

                    <select className={styles.selectBox}>
                        <option>Fee Range</option>
                        {feesRange.map((fee) => (
                            <option value={fee} key={fee}>{fee}</option>
                        ))}
                    </select>
                </motion.div>



                {/* main page */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className={styles.listContainer}
                >
                    {doctors.map((doc, idx) => (
                        <motion.div
                            key={doc.id || idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5 }}
                            className={styles.container}
                        >
                            <div className={styles.doctorInfo}>
                                <div className={styles.card1}>
                                    <div className={styles.imageWrapper}>
                                        <Image src="" alt="Doctor" className={styles.docImage} width="150" height="150" />
                                    </div>
                                </div>

                                <div className={styles.card2}>
                                    <div className={styles.nameHeader}>
                                        <h2 className={styles.name}>{doc.name}</h2>
                                        {doc.pmdcVerified && (
                                            <span className={styles.verifyBadge}>PMDC Verified</span>
                                        )}
                                    </div>
                                    <p className={styles.specs}>{doc.specialization}</p>
                                    <p className={styles.qualify}>{doc.qualification}</p>
                                    <span className={styles.categoryLabel}>{doc.category}</span>

                                    <div className={styles.stats}>
                                        <div className={styles.sItem}>
                                            <span className={styles.statLabel}>Reviews</span>
                                            <span className={styles.statValue}>{doc.reviews}</span>
                                        </div>

                                        <div className={styles.sItem}>
                                            <span className={styles.statLabel}>Experience</span>
                                            <span className={styles.statValue}>{doc.experience}</span>
                                        </div>

                                        <div className={styles.sItem}>
                                            <span className={styles.statLabel}>Satisfaction</span>
                                            <span className={styles.statValue}>{doc.satisfaction}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.card3}>
                                    <button
                                        className={styles.viewBtn}
                                        onClick={() => openProfile(doc)}
                                    >
                                        View Profile
                                    </button>
                                    <button
                                        className={styles.scheduleBtn}
                                        onClick={() => openSchedule(doc)}
                                    >
                                        Schedule booking
                                    </button>
                                </div>
                            </div>

                            <div className={styles.pricing}>
                                <div className={styles.scheduleCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.consultationTitle}>Video Consultation</span>
                                        <div className={styles.badge}>
                                            <Zap size={12} fill="currentColor" />
                                            Fast Confirm
                                        </div>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <p className={styles.availability}>Available Today</p>
                                        <p className={styles.price}>Rs. 700</p>
                                    </div>
                                </div>

                                <div className={styles.scheduleCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.consultationTitle}>Hospital Visit</span>
                                        <div className={styles.badge}>
                                            <Zap size={12} fill="currentColor" />
                                            Fast Confirm
                                        </div>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <p className={styles.availability}>Available Tomorrow</p>
                                        <p className={styles.price}>Rs. 1,000</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </section>
            <Footer />

            {/* Modals */}
            {profileModalOpen && (
                <ProfileModal doctor={selectedDoc} onClose={closeModals} />
            )}
            {scheduleModalOpen && (
                <ScheduleModal doctor={selectedDoc} onClose={closeModals} />
            )}
        </>
    );
};

export default DoctorList;
