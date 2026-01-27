'use client';
import { useAuth } from '@/hooks/useAuth';
import { useMockStore } from '@/context/MockStoreContext';
import { Calendar, Clock, User, CheckCircle, MoreVertical, Activity, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function DoctorDashboard() {
    const { user } = useAuth();
    const { appointments } = useMockStore();

    // Filter appointments for this doctor (Assuming doctor name matches for now)
    const mySchedule = appointments.filter(apt => apt.doctorName === user.name) || [];
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                    <p className="text-emerald-600 font-medium text-sm mb-1 uppercase tracking-wide">Doctor's Portal</p>
                    <h1 className="text-3xl font-bold text-gray-900">Good Morning, Dr. {user.name.split(' ')[1]}</h1>
                    <p className="text-gray-500 mt-1">{today}</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 text-sm font-medium shadow-sm transition-all hover:shadow-md">
                        View Full Calendar
                    </button>
                    <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 text-sm font-medium shadow-lg shadow-emerald-200 transition-all hover:scale-105">
                        Add New Patient
                    </button>
                </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Appointments</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold text-gray-900">{mySchedule.length}</h3>
                                <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-full">+12%</span>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 text-gray-600 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Calendar size={20} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Patients</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold text-gray-900">142</h3>
                                <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-full">+4%</span>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 text-gray-600 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <Users size={20} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Consultations</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-3xl font-bold text-gray-900">28m</h3>
                                <span className="text-xs text-gray-400 font-medium">Avg duration</span>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 text-gray-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <Activity size={20} />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-lg shadow-emerald-100 text-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Efficiency</p>
                            <h3 className="text-3xl font-bold mt-2">98%</h3>
                            <p className="text-emerald-100 text-xs mt-1">Excellent performance</p>
                        </div>
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Schedule List */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <Clock size={18} className="text-emerald-600" />
                            Today's Schedule
                        </h2>
                        <span className="text-sm text-emerald-600 font-medium cursor-pointer hover:underline">View All</span>
                    </div>

                    {mySchedule.length === 0 ? (
                        <div className="py-16 px-6 text-center text-gray-400">
                            <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} className="text-emerald-400" />
                            </div>
                            <h3 className="text-gray-900 font-medium">All Caught Up!</h3>
                            <p className="text-sm mt-1">No appointments scheduled for the rest of the day.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {mySchedule.map((apt, index) => (
                                <div key={apt.id} className="p-5 hover:bg-emerald-50/30 transition-colors flex items-center justify-between group relative">
                                    {/* Timeline connector visual (optional simplified) */}

                                    <div className="flex items-center gap-5">
                                        <div className="flex flex-col items-center">
                                            <span className="text-sm font-bold text-gray-900">{apt.time.split(' ')[0]}</span>
                                            <span className="text-xs text-gray-400">{apt.time.split(' ')[1]}</span>
                                        </div>
                                        <div className="h-10 w-px bg-gray-200"></div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{apt.patientName || 'Unknown Patient'}</h4>
                                            <div className="flex gap-3 text-sm text-gray-500 mt-0.5">
                                                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600">General Checkup</span>
                                                <span className="text-xs mt-0.5">• Age: 32</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        <button className="px-3 py-1.5 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors">Start Visit</button>
                                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                            <MoreVertical size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Notifications / Quick Actions Side Panel */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <AlertCircle size={18} className="text-orange-500" />
                            Urgent Actions
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                                <div className="mt-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-red-900">Lab Results Critical</p>
                                    <p className="text-xs text-red-700 mt-0.5">Patient: John Doe (ID: #8821)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                                <div className="mt-1">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-orange-900">Sign Discharge Summary</p>
                                    <p className="text-xs text-orange-700 mt-0.5">Patient: Sarah Smith</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
