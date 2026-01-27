"use client";
import { X, Calendar, Clock, Star, MapPin, Award } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const ProfileModal = ({ doctor, onClose }) => {
    if (!doctor) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
                >
                    <X size={20} className="text-slate-600" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Column: Image & Basic Info */}
                    <div className="md:w-1/3 bg-slate-50 p-6 flex flex-col items-center text-center border-r border-slate-100">
                        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="https://picsum.photos/200/300" // Using placeholder as in parent
                                alt={doctor.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-1">{doctor.name}</h2>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                            {doctor.specialization}
                        </span>
                        <p className="text-xs text-slate-500 mb-4">{doctor.qualification}</p>

                        <div className="w-full space-y-3 mt-auto">
                            <div className="flex items-center justify-between text-sm p-3 bg-white rounded-lg shadow-sm">
                                <span className="text-slate-500">Experience</span>
                                <span className="font-semibold text-slate-800">{doctor.experience}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm p-3 bg-white rounded-lg shadow-sm">
                                <span className="text-slate-500">Rating</span>
                                <span className="font-semibold text-slate-800 flex items-center gap-1">
                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                    {doctor.satisfaction}%
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:w-2/3 p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Award className="text-blue-500" size={20} />
                            About Doctor
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {doctor.name} is a highly skilled professional with over {doctor.experience} of experience in {doctor.category}.
                            Detailed patient care and accurate diagnosis are top priorities. Committed to providing the best medical services
                            and improving patient health outcomes following the latest medical practices.
                        </p>

                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <MapPin className="text-blue-500" size={20} />
                            Locations
                        </h3>
                        <div className="space-y-3">
                            <div className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
                                <h4 className="font-semibold text-slate-700 text-sm">Fatimiyah Hospital Main</h4>
                                <p className="text-xs text-slate-500 mt-1">Mon - Sat • 10:00 AM - 02:00 PM</p>
                            </div>
                            <div className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
                                <h4 className="font-semibold text-slate-700 text-sm">City Clinic Branch</h4>
                                <p className="text-xs text-slate-500 mt-1">Mon, Wed, Fri • 05:00 PM - 09:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ScheduleModal = ({ doctor, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null);

    // Mock dates
    const dates = [
        { day: 'Mon', date: '08' },
        { day: 'Tue', date: '09' },
        { day: 'Wed', date: '10' },
        { day: 'Thu', date: '11' },
        { day: 'Fri', date: '12' },
    ];

    const timeSlots = [
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM", "07:00 PM"
    ];

    if (!doctor) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                    <X size={20} className="text-slate-600" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Book Appointment</h2>
                    <p className="text-sm text-slate-500 mt-1">with {doctor.name}</p>
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Calendar size={16} /> Select Date
                    </h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {dates.map((d, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedDate(index)}
                                className={`flex flex-col items-center min-w-[60px] p-3 rounded-xl border transition-all ${selectedDate === index
                                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                                        : 'border-slate-200 text-slate-600 hover:border-blue-400'
                                    }`}
                            >
                                <span className="text-xs font-medium uppercase">{d.day}</span>
                                <span className="text-lg font-bold">{d.date}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Clock size={16} /> Select Time
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`text-xs py-2 px-1 rounded-lg border transition-all truncate ${selectedTime === time
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        disabled={!selectedTime}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#004D71] text-white font-bold hover:bg-[#003d5b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};
