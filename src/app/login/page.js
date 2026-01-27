'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import styles from '../styles/auth.module.css';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const user = await login(email, password);

            // Redirect based on role
            if (user.role === 'doctor') {
                router.push('/dashboard/doctor');
            } else if (user.role === 'patient') {
                router.push('/dashboard/patient');
            } else if (user.role === 'admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/patient'); // Default fallback
            }
        } catch (err) {
            setError(err.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.authContainer}>
            {/* Left Side: Image/Brand */}
            <div className={styles.imageSide}>
                <div className={styles.overlay}></div>
                <div className={styles.imageContent}>
                    <h1 className={styles.brandName}>Fatimiyah Hospital</h1>
                    <p className={styles.quote}>
                        "Dedicated to providing exceptional care and improving the quality of life for our community."
                    </p>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className={styles.formSide}>
                <Link href="/" className={styles.backHome}>Back to Home</Link>

                <div className={styles.formHeader}>
                    <h2 className={styles.title}>Welcome Back</h2>
                    <p className={styles.subtitle}>Please enter your details to sign in.</p>
                </div>

                {error && <div className={styles.errorMsg} style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className={styles.footer}>
                    <span>Don't have an account?</span>
                    <Link href="/register" className={styles.link}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}
