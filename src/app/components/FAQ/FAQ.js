'use client'; // Needed for interactivity (accordion)

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';



const FAQ = ({ data }) => {


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    if (data) {
        console.log("FAQ Page has got the connection", data);
    } else {
        console.error("FAQ Page not found", null);
    }
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    const mediaPart = data?.columns?.[0];


    const faqPart = data?.columns?.[1];
    // console.log(faqPart);

    const title = faqPart?.groupSection?.mainTitle;
    // console.log(title);
    const badgeText = faqPart?.groupSection?.badgeText;
    // console.log(badgeText);




    const parseFaqData = (descriptionNode) => {
        const children = descriptionNode?.root?.children;
        const faqData = [];
        if (!children) return null;

        for (let i = 0; i < children.length; i++) {
            const question = children[i];
            const answer = children[i + 1];
            if (question?.children?.[0]?.text && answer?.children?.[0]?.text) {
                faqData.push({
                    question: question?.children?.[0]?.text,
                    answer: answer?.children?.[0]?.text
                })
            }

        }
        return faqData
    }
    const faqItems = parseFaqData(faqPart?.groupSection?.description)

    return (
        <section className={`section-padding ${styles.faqSection}`}>
            <div className={styles.faqContent}>
                {/* Left: Image */}
                <div className={styles.imageColumn}>
                    <div
                        className={styles.imagePlaceholder}
                        style={{
                            backgroundImage: mediaPart?.media?.url ? `url(${PAYLOAD_URL}${mediaPart?.media?.url})` : `url(${PAYLOAD_URL}${mediaPart?.icon?.url})`
                        }}
                    >
                    </div>
                </div>

                {/* Right: Accordion */}

                <div className={styles.textColumn}>
                    <p className={styles.subHead}>{badgeText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="16" viewBox="0 0 45 16" fill="none" className={styles.svgSetting}>
                            <path d="M0.5 7.3505C2.96533 7.3505 7.41736 7.3505 9.78826 6.93199C13.5507 6.26785 13.5669 3.52892 13.8021 3.02344C14.0581 2.4733 14.4679 4.24637 14.76 4.97228C15.0937 5.80166 15.1319 6.58232 15.3665 7.22731C15.6034 7.87853 15.7959 8.71535 15.9337 9.38147C16.0638 10.0103 16.5772 10.5682 16.6968 11.1141C16.8817 11.9578 16.9314 8.96658 17.2036 8.13801C17.4483 7.39308 18.3369 6.83114 18.7093 6.12516C19.1231 5.3409 19.51 4.45654 19.7657 3.62918C19.8745 3.27715 20.059 2.96366 20.215 2.88152C21.1168 2.40683 20.723 4.93001 21.0169 5.67705C21.3145 6.43371 21.5442 7.34567 21.682 8.29321C21.8033 9.12698 22.2856 9.64297 22.776 10.2668C22.9032 10.4286 22.9519 10.6479 23.0306 10.5911C23.8745 9.9816 23.6159 8.28295 24.6113 6.85227C25.3581 5.77892 25.8848 4.85753 26.1593 4.07244C26.4473 3.24861 26.4338 2.68223 26.4532 2.45999C26.5551 1.28927 27.8767 7.00989 28.407 9.09643C28.7116 10.2948 29.2071 11.3315 29.5807 12.1184C30.0374 13.0802 30.3814 14.1494 30.7521 15.0541C30.9134 15.4478 31.0841 15.6797 31.1832 15.3246C31.5372 14.0566 31.4771 12.3497 31.8273 10.8049C32.2678 8.86136 33.001 6.79732 33.4303 5.02784C33.8526 3.28769 34.2914 2.44429 34.6252 0.854179C34.6973 0.510729 34.7231 0.308843 34.8205 0.764195C35.6102 4.45716 35.3871 7.18382 35.5056 7.95201C35.531 8.11663 35.6218 8.27329 35.7971 8.29563C36.795 8.42277 37.2641 7.0727 37.6354 6.60587C37.9298 6.23583 38.2812 7.38915 38.5346 7.59086C39.0734 8.01972 39.6104 6.82751 39.8837 6.84684C40.172 6.86722 40.4304 7.3493 40.9765 7.51054C42.3051 7.47129 43.5592 7.43143 44.0079 7.37104C44.2243 7.3505 44.4179 7.3505 44.5 7.47129" stroke="#D0474F" strokeLinecap="round" />
                        </svg>
                    </p>
                    <h2 className={styles.heading}>{title}</h2>

                    <div className={styles.accordion}>
                        {faqItems.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <div
                                    className={`${styles.questionHead} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3>{item.question}</h3>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.iconWrapper}
                                    >
                                        {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                    </motion.div>
                                </div>
                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={styles.answerBody}
                                        >
                                            <div className={styles.answerContent}>
                                                <p className={styles.answer}>{item.answer}</p>
                                            </div>
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
