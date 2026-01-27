'use client';
import { useAuth } from '@/hooks/useAuth';
import { useMockStore } from '@/context/MockStoreContext';
import { Users, Calendar, DollarSign, Activity, ArrowUpRight, Shield, Settings, FileText } from 'lucide-react';

export default function AdminDashboard() {
    const { user } = useAuth();
    const { users, appointments } = useMockStore();

    // Mock calculations
    const totalPatients = users.filter(u => u.role === 'patient').length;
    const totalDoctors = users.filter(u => u.role === 'doctor').length;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-indigo-900 text-white shadow-xl p-8">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Shield size={18} className="text-indigo-300" />
                            <span className="text-indigo-200 font-medium text-sm tracking-widest uppercase">Admin Control Panel</span>
                        </div>
                        <h1 className="text-3xl font-bold">System Overview</h1>
                        <p className="text-indigo-200 mt-1">Monitoring Hospital Performance & Analytics</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-colors border border-white/10">
                            <Settings size={16} /> Settings
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors shadow-lg shadow-indigo-900/50">
                            <FileText size={16} /> Generate Report
                        </button>
                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity size={200} />
                </div>
            </header>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase">Total Patients</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">{totalPatients}</h3>
                        </div>
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                            <Users size={20} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                        <ArrowUpRight size={12} className="mr-1" /> +12% this month
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase">Total Doctors</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">{totalDoctors}</h3>
                        </div>
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                            <Activity size={20} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-slate-500">
                        All active
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase">Appointments</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">{appointments.length}</h3>
                        </div>
                        <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                            <Calendar size={20} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                        <ArrowUpRight size={12} className="mr-1" /> +8% today
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase">Revenue (Est)</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">$24.5k</h3>
                        </div>
                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                            <DollarSign size={20} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                        <ArrowUpRight size={12} className="mr-1" /> On target
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-lg text-slate-800 mb-6">Recent System Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                                    <div className="w-0.5 h-full bg-slate-100 mt-2"></div>
                                </div>
                                <div className="pb-2">
                                    <p className="text-sm font-medium text-slate-800">New Appointment Booked</p>
                                    <p className="text-xs text-slate-500 mt-1">Patient #1234 booked with Dr. Sarah Ahmed</p>
                                    <p className="text-xs text-slate-400 mt-1">2 mins ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Management Links */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-lg text-slate-800 mb-6">Quick Management</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group">
                            <span className="font-semibold text-slate-700 group-hover:text-indigo-700 block">Manage Users</span>
                            <span className="text-xs text-slate-500">Edit roles, reset passwords</span>
                        </button>
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group">
                            <span className="font-semibold text-slate-700 group-hover:text-indigo-700 block">Department Settings</span>
                            <span className="text-xs text-slate-500">Configure clinic availability</span>
                        </button>
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group">
                            <span className="font-semibold text-slate-700 group-hover:text-indigo-700 block">Billing Overview</span>
                            <span className="text-xs text-slate-500">View invoices and payments</span>
                        </button>
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group">
                            <span className="font-semibold text-slate-700 group-hover:text-indigo-700 block">System Logs</span>
                            <span className="text-xs text-slate-500">View technical audits</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
