'use client';

import Image from 'next/image';
import styles from './AboutContent.module.css';
import placeholderImg from '../../assets/ServiceLayout.png';

// 1. Helper to extract text from Payload/Lexical JSON
const extractText = (richText) => {
    if (!richText?.root?.children) return "";
    return richText.root.children
        .map(node => node.children?.map(child => child.text).join(''))
        .filter(Boolean)
        .join('\n\n');
};

const AboutContent = ({ data }) => {
    if (!data || !data.layout) return null;

    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const layout = data?.layout;


    // 2. Data Extraction
    const excellenceBlock = layout?.find(b => b.blockName === 'excellence' && b.blockType === 'content');


    const statsData = (excellenceBlock?.columns?.[0]?.arraySection?.[0]?.features || []).map(f => ({
        id: f.id || Math.random(), // fallback ID
        title: f.description || "No Title",
        value: f.title || "0",
        iconUrl: f.icon?.url ? `${PAYLOAD_URL}${f.icon.url}` : null
    }));

    const visionBlock = layout?.find(b => b.blockName === 'vision' && b.blockType === 'content');


    const fullText = visionBlock?.columns?.[0]?.text;


    const visionTitle = "Our Vision"; // Hardcoded or extracted from JSON
    const visionDesc = extractText(fullText).split('Our Mission')[0];
    const missionDesc = extractText(fullText).split('Our Mission')[1];


    const visionImage = visionBlock?.columns?.[1]?.media;

    const renderContent = (content, typeToRender) => {
        if (!content?.root?.children) return null;
        return content?.root?.children
            .filter((block) => block.type === typeToRender)
            .map((block, i) => {
                if (block.type === 'heading') {
                    return (
                        <p key={i} className={styles.sectionTitle}>
                            {block.children?.map((child, j) => child.text)}
                        </p>
                    )
                }
                if (block.type === 'paragraph') {
                    return (
                        <p key={i} className={styles.subHead}>
                            {block.children?.map((child, j) => child.text)}
                        </p>
                    )
                }

            })
    }
    const impactBlock = excellenceBlock?.columns?.[0]?.arraySection?.[0]?.mainBox;

    console.log("Impact Block Data:", impactBlock);
    const paragraph = renderContent(impactBlock, 'paragraph');
    const heading = renderContent(impactBlock, 'heading');

    const heroBlock = data?.hero?.richText?.root;
    console.log("Hero Block Data:", heroBlock);
    const heroTitle = heroBlock?.children?.[0]?.children?.[0]?.text;
    const heroSubTitle = heroBlock?.children?.[1]?.children?.[0]?.text;
    console.log(heroSubTitle);


    return (
        <main>

            <section className={styles.heroSection}>
                <div className={styles.heroFrame}>
                    <div className={styles.heroImageWrapper}
                        style={data.hero?.media?.url ? { backgroundImage: `url(${PAYLOAD_URL}${data.hero.media.url})` } : {}}
                    >
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroHeadline}>{heroTitle}</h1>
                            <p className={styles.heroSubhead}>{heroSubTitle}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Vision & Mission Section --- */}
            <section className={styles.vm_section}>
                <div className={styles.vm_container}>
                    <div className={styles.vm_leftContent}>
                        <div className={styles.vm_textBlock}>
                            <h2 className={styles.vm_title}>Our Vision</h2>
                            <p className={styles.vm_desc}>{visionDesc}</p>
                        </div>
                        <div className={styles.vm_textBlock}>
                            <h2 className={styles.vm_title}>Our Mission</h2>
                            <p className={styles.vm_desc}>{missionDesc}</p>
                        </div>
                    </div>
                    <div className={styles.vm_rightContent}>
                        <Image
                            src={visionImage?.url ? `${PAYLOAD_URL}${visionImage.url}` : placeholderImg}
                            alt="Hospital Team" width={540} height={600} unoptimized
                        />
                    </div>
                </div>
            </section>

            {/* --- Impact Section --- */}
            <section className={styles.cv_section}>
                <h1 className={styles.cv_SectionTitle} >{paragraph}</h1>
                <p className={styles.cv_SectionSubTitle}>{heading}</p>
                <div className={styles.cv_gridContainer}>

                    {statsData.map((stat) => (
                        <div key={stat.id} className={styles.cv_card}>
                            {stat.iconUrl && (
                                <img src={stat.iconUrl} alt={stat.title} width={40} height={40} />
                            )}
                            <h3 className={styles.cv_statValue}>{stat.value}</h3>
                            <p className={styles.cv_statTitle}>{stat.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AboutContent;