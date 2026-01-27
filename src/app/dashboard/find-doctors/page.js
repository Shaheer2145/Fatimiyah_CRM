"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import departments from '@/lib/mockData/departments.json';
import {
    Stethoscope,
    Ear,
    Baby,
    BriefcaseMedical, // Fallback for specialized icons
    Brain,
    Bone,
    Utensils, // Gastronomy/Stomach
    Smile, // Dentist
    Scale, // Obesity
    Eye,
    Activity // Child
} from 'lucide-react';

// Map icon strings to Lucide components
const iconMap = {
    "hand": Stethoscope, // Dermatology often associated generally
    "ent": Ear,
    "gynae": Baby,
    "kidney": BriefcaseMedical, // Urology
    "brain": Brain,
    "leg": Bone,
    "stomach": Utensils,
    "dentist": Smile,
    "obesity": Scale,
    "eye": Eye,
    "child": Activity
};

export default function FindDoctorsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDepartments = departments.filter(dept =>
        dept.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#005580] py-16 px-4 sm:px-6 lg:px-8 text-center rounded-b-3xl shadow-lg mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
                    Find The Best Doctors Near You
                </h1>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search medical specialties..."
                        className="block w-full pl-11 pr-4 py-4 rounded-lg leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-xl transition-all duration-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Specialties Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 md:mb-0">Most Viewed Specialities</h2>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-[#005580] text-white text-sm font-medium rounded-md shadow-sm hover:bg-[#004466] transition-colors">
                            Most Popular
                        </button>
                        <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors">
                            All Specialties (a-z)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDepartments.map((dept) => {
                        const IconComponent = iconMap[dept.icon] || BriefcaseMedical;

                        return (
                            <div key={dept.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-4">
                                <div className="flex items-start gap-4 w-full">
                                    <div className="p-3 bg-blue-50 text-[#005580] rounded-full shrink-0">
                                        <IconComponent size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-800 mb-1">{dept.name}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-3">
                                            {dept.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-xs font-medium text-[#005580]">
                                                {dept.doctorCount.toLocaleString()} Doctor(s)
                                            </span>
                                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {filteredDepartments.length === 0 && (
                        <div className="col-span-full text-center py-12 text-slate-500">
                            No specialties found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
