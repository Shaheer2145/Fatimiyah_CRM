'use client';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useMockStore } from '@/context/MockStoreContext';
import Link from 'next/link';
import { Calendar, Clock, MapPin, User, ArrowRight, X, Activity, Droplet } from 'lucide-react';
// import AppointmentForm from '@/components/AppointmentForm';

export default function PatientDashboard() {
    const { user } = useAuth();
    const { appointments } = useMockStore();
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    // Filter appointments for this patient
    const myAppointments = user ? appointments.filter(apt => apt.patientId === user.id) : [];
    const upcomingAppointments = myAppointments.filter(apt => apt.status !== 'completed');

    return (
        <div className="space-y-8 relative">
            {/* Welcoming Header */}
            <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
                <div className="relative z-10 p-8 md:p-10">
                    <h1 className="text-3xl font-bold tracking-tight">Good Morning, {user?.name?.split(' ')[0] || 'Patient'}</h1>
                    <p className="mt-2 text-blue-100 max-w-xl text-lg">
                        Manage your health journey, view appointments, and access medical records all in one place.
                    </p>
                </div>
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl"></div>
            </header>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: Upcoming */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Upcoming</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">{upcomingAppointments.length}</h3>
                            <p className="text-slate-400 text-sm mt-1">Scheduled Visits</p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Calendar size={24} />
                        </div>
                    </div>
                </div>

                {/* Card 2: Book Appointment (Primary Action) */}
                <button
                    onClick={() => setIsBookingOpen(true)}
                    className="flex flex-col justify-between text-left bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold">Book Appointment</h3>
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <Activity size={20} />
                            </div>
                        </div>
                        <p className="text-indigo-100 text-sm mt-2">Find a specialist and schedule <br /> a consultation.</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 font-medium">
                        Book Now <ArrowRight size={18} />
                    </div>
                </button>

                {/* Card 3: Medical History */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">History</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-2">--</h3>
                            <p className="text-slate-400 text-sm mt-1">Past Records</p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Droplet size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Appointments List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-800">Your Schedule</h2>
                    <span className="text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-700">View Calendar</span>
                </div>

                {upcomingAppointments.length === 0 ? (
                    <div className="p-10 text-center text-slate-500">
                        <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                            <Calendar size={24} className="text-slate-300" />
                        </div>
                        <h3 className="text-slate-800 font-medium">No appointments yet</h3>
                        <p className="text-sm mt-1">Your schedule looks clear for now.</p>
                        <button onClick={() => setIsBookingOpen(true)} className="text-blue-600 hover:underline mt-4 text-sm font-medium">
                            Book your first visit
                        </button>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {upcomingAppointments.map((apt) => (
                            <div key={apt.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors group">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="font-bold text-lg">{apt.date.split('-')[2]}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">{apt.doctorName}</h4>
                                        <p className="text-blue-600 text-sm font-medium">{apt.specialization}</p>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                            <span className="flex items-center gap-1.5"><Clock size={15} /> {apt.time}</span>
                                            <span className="flex items-center gap-1.5"><MapPin size={15} /> Clinic 1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-4">
                                    <span className="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-100 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {apt.status}
                                    </span>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Booking Modal */}
            {isBookingOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-lg text-slate-800">Book New Appointment</h3>
                            <button onClick={() => setIsBookingOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            {/* <AppointmentForm onSuccess={() => setIsBookingOpen(false)} /> */}
                            <p className="text-center text-slate-500 py-4">Appointment form coming soon...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
