// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import styles from './Facilities.module.css';

// // Placeholder or existing assets
// import facilityHeroBg from "../../assets/HeroImageORg.png";
// import placeholderMain from "../../assets/ServiceLayout.png";

// const Facilities = () => {
//   const facilities = [
//     {
//       title: "Advanced Operation Theaters",
//       desc: "Modern modular OTs equipped with the latest surgical technology and stringent infection control protocols.",
//       iconPath: "M20 7h-9V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h9c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-11 12H5V5h4v14zm11-4h-9v-6h9v6z"
//     },
//     {
//       title: "Digital Imaging Center",
//       desc: "High-end diagnostic imaging including 1.5 Tesla MRI, 160-slice CT scan, and advanced digital X-ray services.",
//       iconPath: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
//     },
//     {
//       title: "Intensive Care Units (ICU)",
//       desc: "Dedicated ICU and NICU with 24/7 specialized nursing care and invasive/non-invasive ventilation support.",
//       iconPath: "M7 13h5.67L19 6.33 17.67 5 11 \
//             11.67V3H7v10zm-3 2h16v2H4v-2z"
//     },
//     {
//       title: "Waiting Lounges",
//       desc: "Spacious and comfortable waiting areas designed to provide a restful environment for patients' families.",
//       iconPath: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16zM15 12h3V7h-3v5zm-4 0h3V7h-3v5zm-4 0h3V7H7v5zM1 \
//             21h22v2H1v-2z"
//     },
//     {
//       title: "Hygienic Cafeteria",
//       desc: "Nutritious and freshly prepared meals served in a clean environment, adhering to strict food safety standards.",
//       iconPath: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm10-3v8h-1V2h-2v12h-1V6h-2v8c0 2.21 1.79 4 4 4v4h2v-4c2.21 0 4-1.79 4-4V6h-2z"
//     },
//     {
//       title: "Emergency Care (24/7)",
//       desc: "Rapid response emergency and trauma unit ready to handle all critical medical situations round the clock.",
//       iconPath: "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
//     }
//   ];

//   const pulseSVG = (
//     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="16" viewBox="0 0 45 16" fill="none">
//       <path d="M0.5 7.35063C2.96533 7.35063 7.41736 7.35063 9.78826 6.93211C13.5507 6.26797 13.5669 3.52904 13.8021 3.02356C14.0581 2.47342 14.4679 4.2465 14.76 4.9724C15.0937 5.80178 15.1319 6.58244 15.3665 7.22743C15.6034 7.87865 15.7959 8.71547 15.9337 9.38159C16.0638 10.0104 16.5772 10.5683 16.6968 11.1142C16.8817 11.9579 16.9314 8.9667 17.2036 8.13813C17.4483 7.3932 18.3369 6.83126 18.7093 6.12528C19.1231 5.34102 19.51 4.45666 19.7657 3.6293C19.8745 3.27728 20.059 2.96378 20.215 2.88165C21.1168 2.40695 20.723 4.93013 21.0169 5.67717C21.3145 6.43383 21.5442 7.34579 21.682 8.29333C21.8033 9.1271 22.2856 9.64309 22.776 10.2669C22.9032 10.4288 22.9519 10.648 23.0306 10.5912C23.8745 9.98172 23.6159 8.28307 24.6113 6.8524C25.3581 5.77904 25.8848 4.85766 26.1593 4.07256C26.4473 3.24873 26.4338 2.68235 26.4532 2.46011C26.5551 1.28939 27.8767 7.01002 28.407 9.09655C28.7116 10.295 29.2071 11.3316 29.5807 12.1185C30.0374 13.0803 30.3814 14.1495 30.7521 15.0542C30.9134 15.4479 31.0841 15.6798 31.1832 15.3247C31.5372 14.0567 31.4771 12.3498 31.8273 10.805C32.2678 8.86149 33.001 6.79744 33.4303 5.02796C33.8526 3.28781 34.2914 2.44441 34.6252 0.854301C34.6973 0.510851 34.7231 0.308965 34.8205 0.764317C35.6102 4.45728 35.3871 7.18395 35.5056 7.95213C35.531 8.11675 35.6218 8.27341 35.7971 8.29576C36.795 8.42289 37.2641 7.07282 37.6354 6.606C37.9298 6.23595 38.2812 7.38928 38.5346 7.59098C39.0734 8.01984 39.6104 6.82763 39.8837 6.84696C40.172 6.86734 40.4304 7.34942 40.9765 7.51066C42.3051 7.47141 43.5592 7.43155 44.0079 7.37116C44.2243 7.35063 44.4179 7.35063 44.5 7.47141" stroke="#D0474F" strokeLinecap="round" />
//     </svg>
//   );

//   return (
//     <main>
//       {/* --- Hero Section --- */}
//       <section className={styles.heroSection}>
//         <div className={styles.heroFrame}>
//           <motion.div
//             className={styles.heroImageWrapper}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             style={{ backgroundImage: `url(${facilityHeroBg.src})` }}
//           >
//             <div className={styles.heroOverlay}></div>
//             <div className={styles.heroContent}>
//               <motion.h1
//                 className={styles.headline}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >
//                 Our State-of-the-Art <br /> Facilities
//               </motion.h1>
//               <motion.p
//                 className={styles.subHeadline}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 Providing excellence in healthcare with modern infrastructure and compassionate care.
//               </motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- Facilities Grid --- */}
//       <section className={styles.gridSection}>
//         <div className={styles.gridContainer}>
//           <div className={styles.header}>
//             <div className={styles.subTitle}>
//               Advanced Infrastructure {pulseSVG}
//             </div>
//             <h2 className={styles.title}>Clinical Excellence at Fatimiyah</h2>
//           </div>

//           <div className={styles.grid}>
//             {facilities.map((facility, index) => (
//               <motion.div
//                 key={index}
//                 className={styles.card}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className={styles.iconWrapper}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D0474F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d={facility.iconPath} />
//                   </svg>
//                 </div>
//                 <h3 className={styles.cardTitle}>{facility.title}</h3>
//                 <p className={styles.cardDesc}>{facility.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- Patient & Visitor Comfort Section --- */}
//       <section className={styles.comfortSection}>
//         <div className={styles.comfortContainer}>
//           <div className={styles.comfortLeft}>
//             <div className={styles.header}>
//               <span className={styles.comfortBadge}>Comfort & Care</span>
//               <div className={styles.subTitle}>
//                 Patient & Visitor Comfort {pulseSVG}
//               </div>
//               <h2 className={styles.title}>We Care About Your Wellbeing</h2>
//             </div>
//             <div className={styles.comfortDesc}>
//               <p className={styles.cardDesc}>
//                 At Fatimiyah Hospital, we believe that a healing environment is essential for recovery.
//                 Our facilities are designed not just for medical efficiency but for the comfort of patients and their loved ones.
//               </p>
//               <br />
//               <p className={styles.cardDesc}>
//                 From calm waiting zones to hygienic dining facilities, every corner of our hospital
//                 reflects our commitment to 'Excellence with Quality at its Best'.
//               </p>
//             </div>
//           </div>

//           <div className={styles.comfortRight}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className={styles.imageAccent}></div>
//               <Image
//                 src={placeholderMain}
//                 alt="Visitor Comfort"
//                 className={styles.imageMain}
//                 width={558}
//                 height={594}
//                 unoptimized
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Facilities;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Facilities.module.css';

const Facilities = ({ data }) => {
  // 1. Extract blocks from layout
  const clinicBlock = data?.layout?.find(b => b.blockName === 'clinics' && b.blockType === 'archive');
  console.log(clinicBlock);

  const wellbeingBlock = data?.layout?.find(b => b.blockName === 'wellbeing' && b.blockType === 'content');
  console.log("wellbeingBlock", wellbeingBlock);


  const text = wellbeingBlock?.columns[0]?.group?.richText;
  console.log(text);
  const media = wellbeingBlock?.columns[1].media?.url;
  console.log("media", media);

  const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const RichTextRenderer = ({ content }) => {
    if (!content?.root?.children) return null;
    return content.root.children.map((node, i) => (
      node.type === 'heading' ?
        <h2 key={i}>{node.children[0]?.text}</h2> :
        <p key={i}>{node.children[0]?.text}</p>
    ));
  };

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroFrame}>
          <motion.div className={styles.heroImageWrapper} style={{ backgroundImage: `url(${PAYLOAD_URL}${data?.hero?.media?.url})` }}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <h1 className={styles.headline}>{data?.hero?.richText?.root?.children[1]?.children[0]?.text}</h1>
              <p className={styles.subHeadline}>{data?.hero?.richText?.root?.children[0]?.children[0]?.text}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Facilities Grid (Mapped from Clinic Block) --- */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.header}>
            <div className={styles.subTitle}>{clinicBlock?.introContent?.root?.children[0]?.children[0]?.text}</div>
            <h2 className={styles.title}>{clinicBlock?.introContent?.root?.children[1]?.children[0]?.text}</h2>
          </div>

          <div className={styles.grid}>
            {clinicBlock?.selectedDocs?.map((doc, index) => (
              <motion.div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={`${PAYLOAD_URL}${doc?.value?.icon?.url}`}
                    alt={doc?.value?.icon?.alt}
                    width={40}
                    height={40}
                    unoptimized />
                </div>
                <h3 className={styles.cardTitle}>{doc?.value?.title}</h3>
                <p className={styles.cardDesc}>{doc?.value?.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Patient & Visitor Comfort (Mapped from Wellbeing Block) --- */}
      <section className={styles.comfortSection}>
        <div className={styles.comfortContainer}>
          <div className={styles.comfortLeft}>
            <div className={styles.header}>
              <span className={styles.comfortBadge}>{wellbeingBlock?.columns[0].groupSection.badgeText}</span>
              <h2 className={styles.title}>{wellbeingBlock?.columns[0].groupSection.mainTitle}</h2>
            </div>
            <div className={styles.comfortDesc}>
              {wellbeingBlock?.columns[0].groupSection.description.root.children.map((child, i) => (
                <p key={i} className={styles.cardDesc}>{child.children[0].text}</p>
              ))}
            </div>
          </div>

          <div className={styles.comfortRight}>
            <Image
              src={`${PAYLOAD_URL}${wellbeingBlock?.columns[1]?.media?.url}`}
              alt={wellbeingBlock?.columns[1]?.media?.alt}
              width={558}
              height={594}
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Facilities;