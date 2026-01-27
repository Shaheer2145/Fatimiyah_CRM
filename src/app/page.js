import Link from 'next/link'; /* trigger rebuild */
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About/AboutUs';
import MedicalDepartments from './components/Medical/MedicalDepartments';
import Services247 from './components/Services/Services247';
import NewsRoom from './components/News/NewsRoom';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <AboutUs />
      <MedicalDepartments />
      <Services247 />
      <NewsRoom />
      <FAQ />
      <Footer />
    </main>
  );
}
