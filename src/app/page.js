
import styles from './page.module.css';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About/AboutUs';
import MedicalDepartments from './components/Medical/MedicalDepartments';
import Services247 from './components/Services/Services247';
// import NewsRoom from './components/News/NewsRoom';
import FAQ from './components/FAQ/FAQ';
import Stats from './components/Statistics/stats';
import SuccessStories from './components/SuccessStories/SuccessStories';

export default async function Home() {
  let heroData = null;
  let aboutData = null;
  let medicalData = null;
  let serviceData = null;
  let statsData = null;
  let successData=null;
  let newsData = null;
  let faqData = null;
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(
    `${baseUrl}/api/pages/699ec8f9ab2a9047c20669f3?depth=3&draft=false&locale=undefined&trash=false`,
    { cache: 'no-store' }
  );

  if (res.ok) {

    const data = await res.json();
    // console.log('✅ Full API Data Keys:', Object.keys(data));
    // console.log('✅ Full Layout structure:', JSON.stringify(data.layout, null, 2));


    heroData = data.hero || null;
    console.log('✅ heroData received:', JSON.stringify(heroData, null, 2));

    const contentBlock = data.layout?.find((block) => block.blockType === 'content' && block.blockName === 'about');
    aboutData = contentBlock || null;
    console.log('✅ Found Content Block for About:', aboutData);




    const cardBlock = data.layout?.find((block) => block.blockType === 'archive');
    medicalData = cardBlock || null;
    console.log('✅ Found Content Block for Medical:', medicalData);


    const serviceBlock = data.layout?.find((block) => block.blockType === 'content' && block.blockName === 'services');
    serviceData = serviceBlock || null;
    console.log('✅ Found Content Block for Service:', serviceData);


    const newsBlock = data.layout?.find((block) => block.blockType === 'archive' && block.blockName === 'news');
    newsData = newsBlock || null;
    console.log('✅ Found Content Block for News:', newsData);

    const faqBlock = data.layout?.find((block) => block.blockType === 'content' && block.blockName === 'faq');
    faqData = faqBlock || null;
    console.log('✅ Found Content Block for FAQ:', faqData);


    const successBlock = data.layout?.find((block)=> block.blockType == 'archive' && block.blockName === 'stories');
    successData = successBlock || null;
    console.log('✅ Found Content Block for Stories:', successData);

    const statsBlock = data.layout?.find((block)=> block.blockType == 'archive' && block.blockName === 'stats');
    statsData = statsBlock || null;
    console.log('✅ Found Content Block for Stories:', statsData);




  }


  return (
    <main className={styles.main}>

      <Hero data={heroData} />
      <AboutUs data={aboutData} />
      <MedicalDepartments data={medicalData} />
      <Services247 data={serviceData} />
      <Stats data = {statsData}/>
      <SuccessStories data={successData}/>
      {/* <NewsRoom data={newsData} /> */}
      <FAQ data={faqData} />

    </main>
  );
}
