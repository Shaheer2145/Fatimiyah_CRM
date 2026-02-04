'use client';
import Link from 'next/link';
import { Phone, Mail, User, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import Image from "next/image";
import Login from "../../assets/Login.svg";
import signup from "../../assets/signup.png";
import logo from "../../assets/fatmiyahLogo.png";
import { useAuth } from '@/hooks/useAuth';
import departments from "../../../lib/mockData/departments.json"
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';





const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const { user, logout } = useAuth();

    const getDashboardPath = () => {
        if (!user) return '/';
        if (user.role === 'admin') return '/dashboard/admin';
        if (user.role === 'doctor') return '/dashboard/doctor';
        return '/dashboard/patient';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Schedule', href: '/schedule' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Online Lab Report', href: '/online-lab-report' },
        { label: 'Dr Schedule', href: '/dr-schedule' },

    ];

    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <div className={styles.topLinks}>
                        {user ? (
                            <>
                                <Link href={getDashboardPath()} className="flex items-center gap-1 hover:text-blue-200">
                                    <LayoutDashboard size={14} />
                                    Dashboard
                                </Link>
                                <span>|</span>
                                <button onClick={logout} className="flex items-center gap-1 hover:text-red-300">
                                    <LogOut size={14} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Image src={Login} alt='login' />
                                <Link href="/login">Login</Link>

                                <Image src={signup} alt='login' />
                                <Link href="/register">Register</Link>
                            </>
                        )}
                        <Link href="/donate" className={styles.donateBtn}>Donate</Link>
                    </div>
                </div>
            </div>


            <div className={styles.navbar}>
                <div className={styles.navContent}>

                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>


                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} color="#000" /> : <Menu size={28} color="#000" />}
                    </div>


                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                        <ul className={styles.navLinks}>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={pathname === item.href ? styles.active : ''}
                                    >
                                        {item.label}
                                    </Link>
                                </li>

                            ))}
                            <li className={styles.mobileContact}>
                                <Link href="/contact" className={styles.contactBtnNav}>
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
                        <button> <Link href={"/contact"} className={styles.contactBtnNav}>Contact Us</Link></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
