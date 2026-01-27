'use client'; // Needed for interactivity (accordion)

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    { question: 'How can I check online report?', answer: 'You can check your reports online by visiting the E-Services section and entering your MR number.' },
    { question: 'How to Get Online Appointment in Fatimiyah Hospital?', answer: 'Click on the "Make an Appointment" button on the homepage or call our 24/7 helpline.' },
    { question: 'Is the 24/7 Pharmacy open to general public?', answer: 'Yes, our pharmacy serves both inpatients and outpatients 24/7.' },
    { question: 'What are the visiting hours?', answer: 'Visiting hours are from 4:00 PM to 8:00 PM daily.' },
    { question: 'How to Get Online Appointment in Fatimiyah Hospital?', answer: 'Duplicate question from design text placeholder.' },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`section-padding ${styles.faqSection}`}>
            <div className={styles.faqContent}>
                {/* Left: Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imagePlaceholder}>

                    </div>
                </div>

                {/* Right: Accordion */}
                <div className={styles.textColumn}>
                    <p className={styles.subHead}>FAQs</p>
                    <h2 className={styles.heading}>Frequently Asked Questions</h2>

                    <div className={styles.accordion}>
                        {faqData.map((item, index) => (
                            <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
                                <div className={styles.questionHead} onClick={() => toggleFAQ(index)}>
                                    <h3>{item.question}</h3>
                                    {activeIndex === index ? <Minus size={32} /> : <Plus size={32} />}
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.answerBody}
                                            style={{ maxHeight: 'none', padding: '10px 0px 20px 0px' }}
                                        >
                                            <p>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
