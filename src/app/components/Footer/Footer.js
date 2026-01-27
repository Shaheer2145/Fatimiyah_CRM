import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                {/* Column 1: Brand */}
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <h2 className={styles.logoText}>Fatimiyah <span className={styles.hospitalText}>Hospital</span></h2>
                    </div>
                    <p className={styles.brandText}>
                        Helping you find the care you need for yourself and loved ones.
                    </p>
                    <div className={styles.socials}>
                        <Link href="#"><Facebook size={20} /></Link>
                        <Link href="#"><Twitter size={20} /></Link>
                        <Link href="#"><Instagram size={20} /></Link>
                        <Link href="#"><Youtube size={20} /></Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/specialists">Specialist & Doctors</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Departments */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Department's</h3>
                    <ul className={styles.links}>
                        <li><Link href="/dept/cardiology">Cardiology</Link></li>
                        <li><Link href="/dept/ent">ENT Specialist</Link></li>
                        <li><Link href="/dept/neurology">Neurologist</Link></li>
                        <li><Link href="/dept/urology">Urologist</Link></li>
                        <li><Link href="/dept/eye">Eye Specialist</Link></li>
                        <li><Link href="/dept/dentist">Dentist</Link></li>
                    </ul>
                </div>

                {/* Column 4: Address/Map */}
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>Address</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.mapThumb}>
                            {/* Map Placeholder */}
                            <div className={styles.mapPlaceholder}>Map</div>
                        </div>
                        <p><MapPin size={16} style={{ display: 'inline' }} /> 123 Hospital Road, Karachi</p>
                        <p><Phone size={16} /> +92 123 4567890</p>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <div className="container">
                    <p>© 2024 Fatimiyah Hospital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
