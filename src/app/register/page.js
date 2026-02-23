'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '../styles/auth.module.css';

export default function RegisterPage() {
    const router = useRouter();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);

        try {
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            // Register automatically logs in. 
            // Default role is patient for now (as per MockStoreContext), so redirect to patient dashboard.
            router.push('/dashboard/patient');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
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
                    <h1 className={styles.brandName}>Join Fatimiyah</h1>
                    <p className={styles.quote}>
                        "Become a part of our community and get access to premium healthcare services online."
                    </p>
                </div>
            </div>

            {/* Right Side: Register Form */}
            <div className={styles.formSide}>
                <Link href="/" className={styles.backHome}>Back to Home</Link>

                <div className={styles.formHeader}>
                    <h2 className={styles.title}>Create Account</h2>
                    <p className={styles.subtitle}>Enter your details to register.</p>
                </div>

                {error && <div className={styles.errorMsg} style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className={styles.input}
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className={styles.input}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Register'}
                    </button>
                </form>

                <div className={styles.footer}>
                    <span>Already have an account?</span>
                    <Link href="/login" className={styles.link}>Sign in</Link>
                </div>
            </div>
        </div>
    );
}
