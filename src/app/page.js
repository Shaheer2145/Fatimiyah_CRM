
import Header from './components/Header/Header';
import styles from './page.module.css';
import AboutDuplicate from './components/About/AboutDuplicate.js';
import MedicalDepartmentsDuplicate from './components/Medical/MedicalDepartmentsDuplicate';
import ServicesDuplicate from './components/Services/ServicesDuplicate';
import HeroDuplicate from './components/Hero/HeroDuplicate';
import NewsDuplicate from './components/News/NewsDuplicate';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About/AboutUs';
import MedicalDepartments from './components/Medical/MedicalDepartments';
import FooterDuplicate from './components/Footer/FooterDuplicate';
import Services247 from './components/Services/Services247';
import NewsRoom from './components/News/NewsRoom';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero />
      {/* <HeroDuplicate /> */}

      {/* <AboutDuplicate /> */}
      <AboutUs />
      <MedicalDepartments />
      {/* <MedicalDepartmentsDuplicate /> */}
      {/* <ServicesDuplicate /> */}
      <Services247/>
      <NewsRoom />
      {/* <NewsDuplicate /> */}
      <FAQ />
      <Footer />
      {/* <FooterDuplicate /> */}
    </main>
  );
}
