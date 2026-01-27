"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function RoleGuard({ children, allowedRoles }) {
    const { user, isLoading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push('/login');
            } else if (allowedRoles && !allowedRoles.includes(user?.role)) {
                // Redirect to a dashboard or unauthorized page based on role or general home
                router.push('/');
            }
        }
    }, [isAuthenticated, user, isLoading, router, allowedRoles]);

    if (isLoading) {
        return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
        return null; // Will redirect
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return null; // Will redirect
    }

    return <>{children}</>;
}
