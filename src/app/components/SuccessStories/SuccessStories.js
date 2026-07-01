import Image from 'next/image';
import styles from "../../components/SuccessStories/SuccessStories.module.css";
import quotes from "../../assets/Vector.png";
// import image1 from "../../assets/AhmedAli.png";
// import image2 from "../../assets/michaelJohnson.png";
// import image3 from "../../assets/FatimaAli.png";
// import image4 from "../../assets/williams.png";

const SuccessStories = ({ data }) => {
    if (!data) {
        return null;
    }
    else {
        console.log("Stories page has been connected");
    }
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    const title = data?.title;
    const introContent = data?.introContent || "";


    const successCard = data?.populatedData?.docs || data?.selectedDocs || [];
    console.log(successCard);
    const displayCard = successCard.map((item)=>{
        const card = item?.value ? item.value :item;
        return{
            name:card?.name || card?.title,
            position:card.position,
            description:card.description || card.desc,
            icon:card.icon
        }
    })
    console.log(displayCard);
    displayCard.length> 0 && displayCard[0].name !== undefined ? displayCard : "no card";


    const renderContent = (content, typeToRender) => {
        if (!content?.root?.children) return null;
        return content?.root?.children
            .filter((block) => block.type === typeToRender)
            .map((block, i) => {
                if (block.type === 'heading') {
                    return (
                        <div key={i} className={styles.sectionTitle}>
                            {block.children?.map((child, j) => child.text)}
                        </div>
                    )
                }
                if (block.type === 'paragraph') {
                    return (
                        <div key={i} className={styles.subHead}>
                            {block.children?.map((child, j) => child.text)}
                        </div>
                    )
                }

            })
    }
     
    return (
        <>
            <section className={styles.section_container}>
                <div className={styles.inner_border_container}>
                    
                    <span className={styles.sub_title}>{renderContent(introContent, 'paragraph')}</span>
                    <h2 className={styles.main_heading}>{renderContent(introContent, 'heading')}</h2>

                    <div className={styles.cards_grid}>
                        {displayCard.map((item,index) => (
                            <div key={index} className={styles.testimonial_card}>


                                <div className={styles.avatar_container}>
                                    <Image
                                        src={item.icon?.url ? `${PAYLOAD_URL}${item.icon.url}` : (item.icon || null)}
                                        alt={item.name || item.title || 'department'}
                                        className={styles.avatar_img}
                                        width={90}
                                        height={90}
                                        unoptimized
                                    />
                                </div>
                                <div className={styles.quote_icon}>
                                    <Image
                                        src={quotes}
                                        alt='quote'
                                        width={57}
                                        height={43}
                                    />
                                </div>

                                <h3 className={styles.patient_name}>{item.name}</h3>
                                <p className={styles.patient_role}>{item.position}</p>
                                <p className={styles.testimonial_text}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <button className={styles.explore_btn}>
                        Explore More
                    </button>

                </div>

            </section>
        </>
    )
}

export default SuccessStories