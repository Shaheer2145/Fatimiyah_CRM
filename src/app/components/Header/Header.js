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
import { useState } from 'react';





const Header = () => {
    const [isOpen, setIsopen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMenu = () => {
        setIsopen(!isOpen);
    }
    const closeMenu = () => {
        setIsopen(false);
    }
    const { user, logout } = useAuth();

    // Determine dashboard path based on role
    const getDashboardPath = () => {
        if (!user) return '/';
        if (user.role === 'admin') return '/dashboard/admin';
        if (user.role === 'doctor') return '/dashboard/doctor';
        return '/dashboard/patient';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                                <span >|</span>
                                <Image src={signup} alt='login' />
                                <Link href="/register">Register</Link>
                            </>
                        )}
                        <Link href="/donate" className={styles.donateBtn}>Donate</Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={styles.navbar}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <Link href="/">
                            {/* Placeholder for Logo - replacing with text for now if image not available */}
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} color="#000" /> : <Menu size={28} color="#000" />}
                    </div>

                    {/* Navigation Items */}
                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                        <ul className={styles.navLinks}>
                            <li><Link href="/" className={styles.active}>Home</Link></li>
                            
                            <li><Link href="/schedule">Schedule</Link></li>
                            <li><Link href={"/facilities"}>Facilities</Link></li>
                            <li><Link href={"/online-lab-report"}>Online Lab Report</Link></li>
                            <li
                                onClick={() => openMenu()}
                                onDoubleClick={() => closeMenu()}
                            >
                                Dr Schedule
                                {isOpen && (
                                    <ul className={styles.dropdownToggle}>
                                        {departments.map((dept, id) => {
                                            return (
                                                <li key={id}>
                                                    <Link href={"/doctors"}>{dept.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link href={"/contact"} className={styles.contactBtnNav}>Contact Us</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
