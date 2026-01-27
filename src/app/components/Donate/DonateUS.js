'use client';
import React, { useState } from 'react';
import { Copy, Check, Heart, Shield, Users } from 'lucide-react';
import styles from './DonateUS.module.css';

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
            desc: "Cover the cost of one life-saving dialysis session for a needy patient."
        },
        {
            title: "General Fund",
            amount: "Any Amount",
            desc: "Support our daily operations, medicines, and emergency treatments."
        },
        {
            title: "Sponsor a Surgery",
            amount: "PKR 50,000",
            desc: "Help provide critical surgical procedures for those who cannot afford it."
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Healing Hands, Caring Hearts</h1>
                <p className={styles.heroSubtitle}>
                    Your donation brings hope and health to the underprivileged. Join us in our mission to provide quality healthcare to all.
                </p>
                <a href="#methods" className={styles.heroBtn}>Donate Now</a>
            </section>

            {/* Donation Methods */}
            <section id="methods" className={styles.section}>
                <h2 className={styles.sectionTitle}>Ways to Donate</h2>

                {/* Bank Transfer */}
                <div className={styles.bankContainer}>
                    {bankDetails.map((detail, index) => (
                        <div key={index} className={styles.bankCard}>
                            <div className={styles.bankLabel}>{detail.label}</div>
                            <div className={styles.bankValue}>
                                {detail.value}
                                <button
                                    className={styles.copyBtn}
                                    onClick={() => handleCopy(detail.value, index)}
                                >
                                    {copied === index ? <Check size={16} color="green" /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Online Sponsorships */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Make an Impact Today</h2>
                <div className={styles.grid}>
                    {sponsorships.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <Heart size={40} className="text-red-500 mx-auto mb-2" />
                                <div className={styles.cardAmount}>{item.amount}</div>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                                <button className={styles.cardBtn}>Donate {item.amount}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ / Trust */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Why Donate to Us?</h2>
                <div className={styles.grid}>
                    <div className={styles.faqItem}>
                        <div className="flex items-center gap-2 mb-2">
                            <Shield className="text-blue-600" />
                            <h3 className={styles.faqQuestion}>100% Transparent</h3>
                        </div>
                        <p className={styles.faqAnswer}>We audit every rupee. You can request a report of how your donation was utilized.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="text-blue-600" />
                            <h3 className={styles.faqQuestion}>Zakat Eligible</h3>
                        </div>
                        <p className={styles.faqAnswer}>We have a separate Shariah-compliant account for Zakat to help the most deserving patients.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonateUS;