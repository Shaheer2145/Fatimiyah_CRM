"use client";
import Image from "next/image";
import styles from "./DoctorList.module.css";
import { Search, Zap } from "lucide-react";
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
            <Header/>
            <section className={styles.box}>

                <div className={styles.upper_section}>
                    <h1 className={styles.mainHeading}> {doctors.category}Doctors in Fatimiyah</h1>
                    <p className={styles.para}></p>
                </div>
                <div className={styles.filterSection}>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder={placeholder[cindex]}
                        />
                        <Search />  
                    </div>

                    <button className={styles.btn}>Clear Filters</button>
                    <button className={styles.btn}>Doctors Near Me</button>
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
                </div>



                {/* main page */}
                {doctors.map((doc) => (
                    <>
                        <div className={styles.container}>

                            <div className={styles.doctorInfo} key={doc.id}>
                                <div className={styles.card1}>
                                    {/* main box */}
                                    <Image src="https://picsum.photos/200/300" alt="Doctor" className={styles.docImage} width="150" height="150" />
                                </div>

                                <div className={styles.card2}>
                                    <h1 className={styles.name}>{doc.name} </h1>
                                    <p className={styles.verify}>
                                        {doc.pmdcVerified === true ? "PMDC Verified" : " "}
                                    </p>
                                    <p className={styles.specs}>{doc.specialization}</p>
                                    <p className={styles.qualify}>{doc.qualification}</p>
                                    <h5 className={styles.category}>{doc.category}</h5>
                                    <div className={styles.stats}>
                                        <div className={styles.sItems}>
                                            <h4 className={styles.reviews}>Reviews</h4>
                                            <p>{doc.reviews}</p>
                                        </div>

                                        <div className={styles.sItems}>
                                            <h4 className={styles.experience}>Experience </h4>
                                            <p>{doc.experience}</p>
                                        </div>

                                        <div className={styles.sItems}>
                                            <h4 className={styles.satisfy}>Satisfaction </h4>
                                            <p>{doc.satisfaction}%</p>
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
                                        className={styles.viewBtn}
                                        style={{ marginTop: '10px' }}
                                        onClick={() => openSchedule(doc)}
                                    >
                                        Schedule a booking
                                    </button>
                                </div>

                            </div>
                            <div className={styles.pricing}>
                                {/* Mock Data for Schedule Cards - varying content to match image */}
                                <div className={styles.scheduleCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.consultationTitle}>Video Consultation</span>
                                        <div className={styles.badge}>
                                            <Zap size={12} fill="currentColor" />
                                            Fast Confirm
                                        </div>
                                    </div>
                                    <p className={styles.availability}>Available Today</p>
                                    <p className={styles.price}>Rs. 700</p>
                                </div>

                                <div className={styles.scheduleCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.consultationTitle}>Nehal Hospital, Malir, Karachi</span>
                                        <div className={styles.badge}>
                                            <Zap size={12} fill="currentColor" />
                                            Fast Confirm
                                        </div>
                                    </div>
                                    <p className={styles.availability}>Available Today</p>
                                    <p className={styles.price}>Rs. 700</p>
                                </div>


                            </div>
                        </div>
                    </>
                ))}

            </section>
            <Footer/>

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
