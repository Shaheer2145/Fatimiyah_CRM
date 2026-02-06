'use client';

// import RoleGuard from '@/components/RoleGuard';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useState } from 'react';
import departments from '@/lib/mockData/departments.json';
import { LayoutDashboard, LogOut, User, ChevronDown } from 'lucide-react';

export default function DashboardLayout({ children }) {
    const { user, logout } = useAuth();
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    return (
        // <RoleGuard>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            {/* Glassmorphism Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm px-6 py-4 flex justify-between items-center transition-all">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Fatimiyah CRM
                    </Link>
                    <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
                    <span className="font-medium text-slate-500 capitalize hidden sm:block tracking-wide text-sm bg-slate-100 px-3 py-1 rounded-full">{user?.role} Dashboard</span>

                    {/* Doctor Schedule Dropdown */}
                    <div
                        className="relative hidden md:block"
                        onMouseEnter={() => setIsScheduleOpen(true)}
                        onMouseLeave={() => setIsScheduleOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-50">
                            Doctor Schedule
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isScheduleOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${isScheduleOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden ring-1 ring-black/5">
                                <div className="p-2 max-h-[60vh] overflow-y-auto">
                                    <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Specialties
                                    </div>
                                    {departments.map((dept) => (
                                        <Link
                                            key={dept.id}
                                            href={`/dashboard/find-doctors?specialty=${encodeURIComponent(dept.name)}`}
                                            className="block px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors truncate"
                                        >
                                            {dept.name}
                                        </Link>
                                    ))}
                                    <div className="h-px bg-slate-100 my-2"></div>
                                    <Link
                                        href="/dashboard/find-doctors"
                                        className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center"
                                    >
                                        View All Doctors
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <span className="hidden md:inline font-medium">Welcome, {user?.name?.split(' ')[0] || 'User'}</span>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-red-50"
                    >
                        <LogOut size={16} />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
        // </RoleGuard>
    );
}
