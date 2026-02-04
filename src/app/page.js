
import Header from './components/Header/Header';
import styles from './page.module.css';
import AboutDuplicate from './components/About/AboutDuplicate.js';
import MedicalDepartmentsDuplicate from './components/Medical/MedicalDepartmentsDuplicate';
import ServicesDuplicate from './components/Services/ServicesDuplicate';
import HeroDuplicate from './components/Hero/HeroDuplicate';
import NewsDuplicate from './components/News/NewsDuplicate';

import FooterDuplicate from './components/Footer/FooterDuplicate';



export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      
      {/* <Hero /> */}
      <HeroDuplicate/>
      
      <AboutDuplicate/>
      {/* <AboutUs /> */}
      {/* <MedicalDepartments /> */}
      <MedicalDepartmentsDuplicate/>
      <ServicesDuplicate/>
      {/* <Services247/> */}
      {/* <NewsRoom /> */}
      <NewsDuplicate/>
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <FooterDuplicate/>
    </main>
  );
}
