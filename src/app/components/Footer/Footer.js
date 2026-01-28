'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Footer.module.css';
import Image from 'next/image';
import logo from "../../assets/fatmiyahLogo.png";

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <footer className={styles.footer}>
            <motion.div
                className={`container ${styles.footerContent}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Column 1: Brand */}
                <motion.div variants={itemVariants} className={styles.col}>
                    <div className={styles.logo}>
                        <Image
                            src={logo}
                            alt="Fatimiyah Hospital Logo"
                            width={150}
                            height={150}
                        />
                    </div>
                    <p className={styles.brandText}>
                        Helping you find the care you need for yourself and loved ones. Our commitment to excellence in healthcare is unwavering since our inception.
                    </p>
                    <div className={styles.socials}>
                        {[
                            { Icon: Facebook, href: "#", color: "#1877F2" },
                            { Icon: Twitter, href: "#", color: "#1DA1F2" },
                            { Icon: Instagram, href: "#", color: "#E4405F" },
                            { Icon: Youtube, href: "#", color: "#FF0000" },
                        ].map((social, idx) => (
                            <motion.div key={idx} whileHover={{ y: -3, scale: 1.1 }}>
                                <Link href={social.href} style={{ '--hover-color': social.color }}>
                                    <social.Icon size={20} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div variants={itemVariants} className={styles.col}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/schedule">Schedule</Link></li>
                        <li><Link href="/facilities">Facilities</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/online-lab-report">Online Lab Report</Link></li>
                    </ul>
                </motion.div>

                {/* Column 3: Departments */}
                <motion.div variants={itemVariants} className={styles.col}>
                    <h3 className={styles.colTitle}>Departments</h3>
                    <ul className={styles.links}>
                        <li><Link href="/doctors?dept=cardiology">Cardiology</Link></li>
                        <li><Link href="/doctors?dept=ent">ENT Specialist</Link></li>
                        <li><Link href="/doctors?dept=neurology">Neurologist</Link></li>
                        <li><Link href="/doctors?dept=urology">Urologist</Link></li>
                        <li><Link href="/doctors?dept=ophthalmology">Eye Specialist</Link></li>
                        <li><Link href="/doctors?dept=dentistry">Dentist</Link></li>
                    </ul>
                </motion.div>

                {/* Column 4: Address/Map */}
                <motion.div variants={itemVariants} className={styles.col}>
                    <h3 className={styles.colTitle}>Address</h3>
                    <div className={styles.contactInfo}>
                        <Link
                            href="https://maps.google.com"
                            target="_blank"
                            className={styles.mapThumb}
                        >
                            <div className={styles.mapPlaceholder}>
                                <span>View on Maps</span>
                            </div>
                        </Link>
                        <p><MapPin size={16} className={styles.contactIcon} /> Soldier Bazar, Garden East, Karachi</p>
                        <p><Phone size={16} className={styles.contactIcon} /> +92 21 111 012 014</p>
                        <p><Mail size={16} className={styles.contactIcon} /> contact@fh.org.pk</p>
                    </div>
                </motion.div>
            </motion.div>

            <div className={styles.copyright}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Fatimiyah Hospital. All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className={styles.scrollTop}
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
