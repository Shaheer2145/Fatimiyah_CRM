'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './NewsRoom.module.css';
import Image from 'next/image';
import mainImage from "../../assets/articlemain.jpg";
import sideImage1 from "../../assets/rightArticle1.png";
import sideImage2 from "../../assets/rightArticle2.png";
import sideImage3 from "../../assets/rightArticle3.png";
import { motion } from 'framer-motion';


const NewsRoom = () => {
    return (
        <section className={`section-padding ${styles.newsSection}`}>
            <div className={styles.newsWrapper}>
                <div className={styles.headerRow}>
                    <p className={styles.subHead}>Updates</p>
                    <h2 className={styles.sectionTitle}>Our News Room</h2>
                </div>

                <div className={styles.contentGrid}>
                    {/* Featured Article (Left) */}
                    <motion.div
                        className={styles.featuredArticle}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.featuredImagePlaceholder}>
                        </div>
                        <div className={styles.featuredContent}>
                            <h3 className={styles.featuredTitle}>Lorem ipsum</h3>
                            <p className={styles.excerpt}>
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                            </p>
                            <Link href="/news/1" className={styles.readMore}>Read more...</Link>
                        </div>
                    </motion.div>

                    {/* News List (Right) */}
                    <div className={styles.newsList}>
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                className={styles.newsItem}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.thumbnail}>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.readtime}>
                                        <h4 className={styles.itemTitle}>Lorem ipsum</h4>
                                        <span className={styles.itemDate}>2min read </span>
                                    </div>
                                    <p className={styles.itemExcerpt}>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <Link href={`/news/${item}`} className={styles.readMoreSmall}>Read more...</Link>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsRoom;
