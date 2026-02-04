'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './NewsDuplicate.module.css';
import news1 from "../../assets/blog1.png";
import news2 from "../../assets/blog2.png";
import news3 from "../../assets/blog3.png";
import icon from "../../assets/Icon.svg";
import Image from "next/image"
const posts = [
    {
        category: 'Surgery',
        date: 'Oct 23, 2024',
        author: 'Anne William',
        title: 'Tips for Orthopedic Surgery Patients',
        icon: icon,
        img: news1
    },
    {
        category: 'Orthopedic',
        date: 'Oct 23, 2024',
        author: 'Anne William',
        title: 'Transfusion strategy and heart surgery',
        icon: icon,
        img: news2
    },
    {
        category: 'Surgery',
        date: 'Oct 23, 2024',
        author: 'Anne William',
        title: 'Get the Exercise for Limited Mobility',
        icon: icon,
        img: news3
    }
];

const NewsDuplicate = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subTitle}>Our Blog</span>
                    <h2 className={styles.title}>Latest Post & Article</h2>
                </div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={post.img} alt={post.title} className={styles.image} />
                                <div className={styles.badge}>{post.category}</div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                            </div>
                            <div className={styles.arrowWrapper}>
                                <button className={styles.arrowBtn}>
                                    <Image src={post.icon} alt='icon' />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsDuplicate;
