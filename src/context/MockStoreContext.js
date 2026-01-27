"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import initialUsers from '@/lib/mockData/users.json';
import initialAppointments from '@/lib/mockData/appointments.json';

const MockStoreContext = createContext();

export const MockStoreProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize store from LocalStorage or seed data
    useEffect(() => {
        const storedUsers = localStorage.getItem('crm_users');
        const storedAppointments = localStorage.getItem('crm_appointments');
        const storedUserSession = localStorage.getItem('crm_current_user');

        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            setUsers(initialUsers);
            localStorage.setItem('crm_users', JSON.stringify(initialUsers));
        }

        if (storedAppointments) {
            setAppointments(JSON.parse(storedAppointments));
        } else {
            setAppointments(initialAppointments);
            localStorage.setItem('crm_appointments', JSON.stringify(initialAppointments));
        }

        if (storedUserSession) {
            setCurrentUser(JSON.parse(storedUserSession));
        }

        setIsLoading(false);
    }, []);

    // Persist changes to LocalStorage
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('crm_users', JSON.stringify(users));
        }
    }, [users, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('crm_appointments', JSON.stringify(appointments));
        }
    }, [appointments, isLoading]);

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    const { password, ...userWithoutPassword } = user;
                    setCurrentUser(userWithoutPassword);
                    localStorage.setItem('crm_current_user', JSON.stringify(userWithoutPassword));
                    resolve(userWithoutPassword);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 500);
        });
    };

    const register = (userData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUser = users.find(u => u.email === userData.email);
                if (existingUser) {
                    reject(new Error('User already exists'));
                    return;
                }

                const newUser = {
                    id: Date.now(), // Simple ID generation
                    ...userData,
                    role: 'patient', // Default role for registration
                    profile: userData.profile || {}
                };

                setUsers(prev => [...prev, newUser]);

                // Auto login after register
                const { password, ...userWithoutPassword } = newUser;
                setCurrentUser(userWithoutPassword);
                localStorage.setItem('crm_current_user', JSON.stringify(userWithoutPassword));

                resolve(userWithoutPassword);
            }, 500);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('crm_current_user');
    };

    const addAppointment = (appointmentData) => {
        const newAppointment = {
            id: Date.now(),
            ...appointmentData,
            status: 'pending'
        };
        setAppointments(prev => [...prev, newAppointment]);
        return newAppointment;
    };

    const value = {
        users,
        appointments,
        currentUser,
        isLoading,
        login,
        register,
        logout,
        addAppointment
    };

    return (
        <MockStoreContext.Provider value={value}>
            {children}
        </MockStoreContext.Provider>
    );
};

export const useMockStore = () => {
    const context = useContext(MockStoreContext);
    if (!context) {
        throw new Error('useMockStore must be used within a MockStoreProvider');
    }
    return context;
};
