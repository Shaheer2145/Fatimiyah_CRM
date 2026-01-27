"use client";

import { useMockStore } from '@/context/MockStoreContext';

export const useAuth = () => {
    const context = useMockStore();

    if (!context) {
        throw new Error('useAuth must be used within a MockStoreProvider');
    }

    const { currentUser, login, register, logout, isLoading } = context;

    return {
        user: currentUser,
        isAuthenticated: !!currentUser,
        role: currentUser?.role,
        login,
        register,
        logout,
        isLoading
    };
};
