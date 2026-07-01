'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import Image from "next/image";
import Letter from "../../assets/Letter.png";
import phone from "../../assets/phone.png";
import Login from "../../assets/Login.svg";
import Signup from "../../assets/signup.png";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';





const Header = ({ headerData }) => {
    if (headerData) {
        console.log("Header has been connected", headerData);
    } else {
        console.log('Header has not been connected');
    }



    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');
    const pathname = usePathname();
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };



    // const { user, logout } = useAuth(); // Commented out to resolve build error (missing provider)
    const user = null; // Stubbed for build


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = headerData?.navItems?.map((item) => ({
        label: item.link?.label || "Link",
        href: `${item.link?.reference?.value?.slug || ''}`
    })) || [];
    console.log(navItems)


    const handleItemClick = (label) => {
        setActiveItem(label);
        setIsMobileMenuOpen(false); // Close mobile menu on click
    };

    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const logo = headerData?.media?.url ? `${PAYLOAD_URL}${headerData?.media?.url}` : null;
    console.log(logo, "logo");

    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <div className={styles.topLinks}>

                        <div className={styles.linkItem}>
                            <Image src={Letter} alt='' className={styles.letterImage} />
                            <Link className={styles.letter} href="/"><span className={styles.navText}>contact@fh.org.pk</span></Link>
                        </div>

                        <div className={styles.linkItem}>
                            <Image src={phone} alt='' className={styles.phoneImage} />
                            <Link className={styles.phone} href="/"><span className={styles.navText}>021 111 012 014</span></Link>
                        </div>

                        <div className={styles.linkItem}>
                            <Image src={Login} alt='login' className={styles.registerImage} />
                            <Link className={styles.login} href="/"><span className={styles.navText}>Login</span></Link>
                        </div>

                        <div className={styles.linkItem}>
                            <Image src={Signup} alt='login' className={styles.loginImage} />
                            <Link className={styles.login} href="/"><span className={styles.navText}>Register</span></Link>
                        </div>

                        <Link href="/" className={styles.donateBtn}>Donate</Link>
                    </div>
                </div>
            </div>


            <div className={styles.navbar}>
                <div className={styles.navContent}>

                    <div className={styles.logo}>
                        <Link href="/">
                            {headerData?.media?.url && (
                                <Image
                                    src={headerData?.media?.url ? `${PAYLOAD_URL}${headerData?.media?.url}` : 'no image'}
                                    alt={headerData?.media.alt}
                                    className={styles.image}
                                    width={headerData?.media.width || 203}
                                    height={headerData?.media.height || 107}
                                    unoptimized
                                />
                            )}
                        </Link>
                    </div>


                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} color="#000" /> : <Menu size={28} color="#000" />}
                    </div>


                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                        <ul className={styles.navLinks}>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={activeItem === item.label ? styles.active : ''}
                                        onClick={() => handleItemClick(item.label)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>

                            ))}
                            <li className={styles.mobileContact}>
                                <Link href="/" className={styles.contactBtnNav}>
                                    Contact Us
                                </Link>
                            </li>

                            {/* <li
                                className={styles.dropdownContainer}
                                ref={dropdownRef}
                            >
                                <button
                                    // className={`${styles.dropdownBtn} ${pathname.startsWith('/doctors') ? styles.active : ''}`}
                                    // onClick={toggleMenu}
                                >
                                    Dr Schedule
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className={styles.dropdownToggle}
                                        >
                                            {departments.map((dept, id) => (
                                                <li key={id}>
                                                    <Link href={`/doctors?dept=${dept.slug}`} onClick={closeMenu}>
                                                        {dept.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li> */}

                        </ul>
                    </nav>
                    <div className={styles.desktopOnlyContact}>
                        <Link href={"/contact"} className={styles.contactBtnNav}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
