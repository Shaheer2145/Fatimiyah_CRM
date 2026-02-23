'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import Image from "next/image";
import Login from "../../assets/Login.svg";
import Signup from "../../assets/signup.png";
import logo from "../../assets/fatmiyahLogo.png";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';





const Header = () => {
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

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // const { user, logout } = useAuth(); // Commented out to resolve build error (missing provider)
    const user = null; // Stubbed for build

    // const getDashboardPath = () => {
    //     if (!user) return '/';
    //     if (user.role === 'admin') return '/dashboard/admin';
    //     if (user.role === 'doctor') return '/dashboard/doctor';
    //     return '/dashboard/patient';
    // };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/' },
        { label: 'Schedule', href: '/' },
        { label: 'Facilities', href: '/' },
        { label: 'Online Lab Report', href: '/' },
        { label: 'Dr Schedule', href: '/' },

    ];

    const handleItemClick = (label) => {
        setActiveItem(label);
        setIsMobileMenuOpen(false); // Close mobile menu on click
    };

    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <div className={styles.topLinks}>


                        <Image src={Login} alt='login' className={styles.registerImage} />
                        <Link className={styles.login} href="/">Login</Link>

                        <Image src={Signup} alt='login' className={styles.loginImage} />
                        <Link className={styles.login} href="/">Register</Link>


                        <Link href="/" className={styles.donateBtn}>Donate</Link>
                    </div>
                </div>
            </div>


            <div className={styles.navbar}>
                <div className={styles.navContent}>

                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" className={styles.image} />
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
                        <Link href={"/"} className={styles.contactBtnNav}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
