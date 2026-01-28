'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './DonateUS.module.css';
import herobgImage from "../../assets/herobgimage.png";

const DonateUS = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    const bankDetails = [
        { label: 'Bank Name', value: 'Meezan Bank Ltd.' },
        { label: 'Account Title', value: 'Fatmiyah Educational & Welfare' },
        { label: 'Account Number', value: '0102-0100456789' },
        { label: 'IBAN', value: 'PK36MEZN0001020100456789' },
    ];

    const sponsorships = [
        {
            title: "Sponsor a Dialysis",
            amount: "PKR 5,000",
            desc: "Cover the cost of one life-saving dialysis session for a needy patient.",
            icon: Heart
        },
        {
            title: "General Fund",
            amount: "Any Amount",
            desc: "Support our daily operations, medicines, and emergency treatments.",
            icon: Users
        },
        {
            title: "Sponsor a Surgery",
            amount: "PKR 50,000",
            desc: "Help provide critical surgical procedures for those who cannot afford it.",
            icon: Shield
        }
    ];

    return (
        <div className={styles.donatePage}>
            {/* Hero Section */}
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
                        Healing Hands, Caring Hearts
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.mainTitle}
                    >
                        Every contribution <br /> makes a difference.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.heroDesc}
                    >
                        Your donation brings hope and health to the underprivileged. Join us in our mission
                        to provide quality healthcare to all regardless of their financial status.
                    </motion.p>
                </div>
            </section>

            {/* Bank Accounts Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Bank Transfer Details</h2>
                        <p className={styles.sectionDesc}>Directly contribute via secure bank transfer through any of our official accounts.</p>
                    </div>

                    <div className={styles.bankGrid}>
                        {bankDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.bankCard}
                            >
                                <span className={styles.bankLabel}>{detail.label}</span>
                                <div className={styles.bankValue}>
                                    {detail.value}
                                    <button
                                        className={styles.copyBtn}
                                        onClick={() => handleCopy(detail.value, index)}
                                        title="Copy to clipboard"
                                    >
                                        {copied === index ? <Check size={18} /> : <Copy size={18} />}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Cards Section */}
            <section className={`${styles.section} bg-slate-50`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Make an Impact Today</h2>
                        <p className={styles.sectionDesc}>Choose a focused sponsorship program or contribute to our general welfare fund.</p>
                    </div>

                    <div className={styles.impactGrid}>
                        {sponsorships.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.card}
                            >
                                <div className={styles.cardHeader}>
                                    <item.icon size={48} className={styles.cardIcon} />
                                    <div className={styles.cardAmount}>{item.amount}</div>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                    <button className={styles.cardBtn}>
                                        Donate Now <ArrowRight size={16} className="inline ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust / VerificationSection */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Your Trust, Our Responsibility</h2>
                        <p className={styles.sectionDesc}>We ensure that 100% of your contributions go towards patient care and medical facilities.</p>
                    </div>

                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}><Shield size={32} /></div>
                            <h3 className={styles.trustTitle}>100% Transparent</h3>
                            <p className={styles.trustDesc}>Our accounts are audited by top firms, and we provide transparent reporting of fund utilization.</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}><Users size={32} /></div>
                            <h3 className={styles.trustTitle}>Zakat Eligible</h3>
                            <p className={styles.trustDesc}>We maintain a separate, Shariah-compliant Zakat fund for deserving patients under strict supervision.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonateUS;
