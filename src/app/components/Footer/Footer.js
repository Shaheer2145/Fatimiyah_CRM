'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import fbLogo from "../../assets/FacebookLogo.svg";
import ytLogo from "../../assets/YoutubeLogo.svg";
import instaLogo from "../../assets/InstagramLogo.svg";
import linkedinLogo from "../../assets/LinkedinLogo.svg";
import map from "../../assets/MAp.png";
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Footer.module.css';
import Image from 'next/image';
import logo from "../../assets/FatmiyahFooterLogo.png";

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
            <div
                className={styles.container}

            >

                <div className={styles.info}>
                    <div className={styles.logo}>
                        <Image
                            src={logo}
                            alt="Fatimiyah Hospital Logo"
                            width={150}
                            height={150}
                        />
                    </div>
                    <p className={styles.brandText}>
                        Serving 24/7 Emergency Service and<br /> other Health Care Facilities.
                    </p>
                    <div className={styles.socials}>
                        {[
                            { Icon: fbLogo, href: "#", color: "#1877F2" },
                            { Icon: ytLogo, href: "#", color: "#1DA1F2" },
                            { Icon: instaLogo, href: "#", color: "#E4405F" },
                            { Icon: linkedinLogo, href: "#", color: "#FF0000" },
                        ].map((social, idx) => (
                            <div key={idx}>
                                <Link href={social.href} style={{ '--hover-color': social.color }}>
                                    <Image src={social.Icon} alt="Social Icon" width={30} height={30} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div variants={itemVariants} className={styles.col}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Consultant Schedule</Link></li>
                        <li><Link href="/">Online Lab Report</Link></li>
                        <li><Link href="/">Contact Us</Link></li>

                    </ul>
                </div>


                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Areas we work in</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Dermatologist</Link></li>
                        <li><Link href="/">ENT Specialist</Link></li>
                        <li><Link href="/">Gynecologist</Link></li>
                        <li><Link href="/">Urologist</Link></li>
                        <li><Link href="/">Neurologist</Link></li>
                        <li><Link href="/">Dentist</Link></li>
                        <li><Link href="/">Child Specialist</Link></li>
                    </ul>
                </div>

                {/* Column 4: Address/Map */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Address</h3>
                    <ul className={styles.contactInfo}>
                        <li>
                            <Link
                                href="https://www.google.com/maps/place/Fatimiyah+Hospital/@24.8780215,67.0315823,887m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3eb33e4340000001:0xe1b798a8bc2cf067!8m2!3d24.8780215!4d67.0341626!16s%2Fg%2F1tfjtrlx?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                            // className={styles.mapThumb}
                            >
                                <Image src={map} alt="Map" width={205} height={157} />
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className={styles.col}>
                    <ul className={styles.contactInfo}>
                        <li className={styles.socials}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                <path d="M25 8.5H7C6.80109 8.5 6.61032 8.57902 6.46967 8.71967C6.32902 8.86032 6.25 9.05109 6.25 9.25V22C6.25 22.3978 6.40804 22.7794 6.68934 23.0607C6.97064 23.342 7.35218 23.5 7.75 23.5H24.25C24.6478 23.5 25.0294 23.342 25.3107 23.0607C25.592 22.7794 25.75 22.3978 25.75 22V9.25C25.75 9.05109 25.671 8.86032 25.5303 8.71967C25.3897 8.57902 25.1989 8.5 25 8.5ZM23.0716 10L16 16.4828L8.92844 10H23.0716ZM24.25 22H7.75V10.9553L15.4928 18.0531C15.6312 18.1801 15.8122 18.2506 16 18.2506C16.1878 18.2506 16.3688 18.1801 16.5072 18.0531L24.25 10.9553V22Z" fill="#D0474F" />
                            </svg>
                            <p className={styles.contactInfo} >contact@fh.org.pk</p>
                        </li>
                        <li className={styles.socials}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
                                <path d="M24.8472 18.8554L20.4306 16.8764L20.4184 16.8707C20.1892 16.7727 19.939 16.7333 19.6907 16.7562C19.4424 16.7792 19.2037 16.8636 18.9963 17.002C18.9718 17.0181 18.9484 17.0357 18.9259 17.0545L16.6441 18.9998C15.1984 18.2976 13.7059 16.8164 13.0038 15.3895L14.9519 13.0729C14.9706 13.0495 14.9884 13.0261 15.0053 13.0007C15.1407 12.7938 15.2229 12.5567 15.2445 12.3103C15.2661 12.064 15.2264 11.8162 15.1291 11.5889V11.5776L13.1444 7.15356C13.0157 6.85662 12.7944 6.60926 12.5136 6.44841C12.2328 6.28756 11.9075 6.22184 11.5863 6.26106C10.3159 6.42822 9.14986 7.05209 8.30588 8.01615C7.4619 8.98021 6.99771 10.2185 7.00001 11.4998C7.00001 18.9436 13.0563 24.9998 20.5 24.9998C21.7813 25.0021 23.0196 24.5379 23.9837 23.6939C24.9477 22.85 25.5716 21.6839 25.7388 20.4136C25.7781 20.0924 25.7125 19.7672 25.5518 19.4864C25.3911 19.2056 25.144 18.9843 24.8472 18.8554ZM20.5 23.4998C17.3185 23.4963 14.2682 22.2309 12.0186 19.9813C9.76888 17.7316 8.50348 14.6813 8.50001 11.4998C8.49648 10.5843 8.82631 9.69887 9.42789 9.00879C10.0295 8.3187 10.8617 7.87118 11.7691 7.74981C11.7687 7.75355 11.7687 7.75732 11.7691 7.76106L13.7378 12.1673L11.8 14.4867C11.7803 14.5093 11.7625 14.5335 11.7466 14.5589C11.6055 14.7754 11.5227 15.0246 11.5063 15.2825C11.4899 15.5404 11.5403 15.7981 11.6528 16.0307C12.5022 17.7679 14.2525 19.5051 16.0084 20.3536C16.2428 20.465 16.502 20.5137 16.7608 20.495C17.0196 20.4762 17.2692 20.3907 17.485 20.2467C17.5091 20.2305 17.5322 20.2129 17.5544 20.1942L19.8334 18.2498L24.2397 20.2232C24.2397 20.2232 24.2472 20.2232 24.25 20.2232C24.1301 21.1319 23.6833 21.9658 22.9931 22.5689C22.3028 23.172 21.4166 23.5029 20.5 23.4998Z" fill="#D0474F" />
                            </svg>
                            <p className={styles.contactInfo} >021 111 012 014</p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className={styles.copyright}>
                <div className="container">
                    <p className={styles.copyrightContent}>© {new Date().getFullYear()} LifeCare. All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {/* <AnimatePresence>
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
            </AnimatePresence> */}
        </footer>
    );
};

export default Footer;
