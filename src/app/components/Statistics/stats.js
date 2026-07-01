'use client';
import styles from './stats.module.css';
import Image from 'next/image';

const stats = ({ data }) => {

    // const statsData = [
    //     {
    //         id: 1,
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    //                 <circle cx="9" cy="7" r="4" />
    //                 <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    //                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    //             </svg>
    //         ),
    //         number: "1,700,000+",
    //         label: "TOTAL PATIENTS SERVED"
    //     },
    //     {
    //         id: 2,
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <circle cx="11" cy="11" r="8" />
    //                 <path d="m21 21-4.3-4.3" />
    //             </svg>
    //         ),
    //         number: "45,574+",
    //         label: "SCREENINGS CONDUCTED"
    //     },
    //     {
    //         id: 3,
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v4a3 3 0 0 0 6 0v-4a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    //                 <path d="M8 15v1a4 4 0 0 0 8 0v-1" />
    //             </svg>
    //         ),
    //         number: "429,000+",
    //         label: "SUCCESSFUL PROCEDURES PERFORMED"
    //     },
    //     {
    //         id: 4,
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    //                 <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    //                 <line x1="12" y1="22.08" x2="12" y2="12" />
    //             </svg>
    //         ),
    //         number: "18+",
    //         label: "YEARS OF COMMUNITY SERVICE"
    //     }];








    if (!data) {
        return null;
    }
    else {
        console.log("Stories page has been connected");
    }
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';




    const stats = data?.populatedData?.docs || data?.selectedDocs || [];
    const statsDisplay = stats.map((item) => {
        const card = item?.value ? item.value : item;
        return {
            value: card.value,
            title: card.title || card.name,
            icon: card.icon
        }
    })
    statsDisplay.length > 0 && statsDisplay[0].name !== undefined ? statsDisplay : "no card";




    return (

        <section className={styles.statsSection}>
            <div className={`container ${styles.content}`}>
                <div className={styles.stats_wrapper}>
                    {statsDisplay.map((stat, id) => (
                        <div key={id} className={styles.stat_card}>
                            <div className={styles.icon_box}>
                                <Image
                                    src={stat.icon?.url ? `${PAYLOAD_URL}${stat.icon.url}` : (stat.icon || null)}
                                    alt={stat.name || stat.title || 'stats'}
                                    className={styles.avatar_img}
                                    width={90}
                                    height={90}
                                    unoptimized
                                />
                            </div>
                            <h2 className={styles.stat_number}>
                                {stat.value}
                            </h2>
                            <p className={styles.stat_label}>
                                {stat.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default stats;
