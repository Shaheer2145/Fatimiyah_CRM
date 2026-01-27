'use client';

import { useState } from 'react';
import { useMockStore } from '@/context/MockStoreContext';
import { useAuth } from '@/hooks/useAuth';
import doctors from '@/lib/mockData/doctors.json';

export default function AppointmentForm({ onSuccess }) {
    const { addAppointment } = useMockStore();
    const { user } = useAuth();

    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const doctor = doctors.find(d => d.id === parseInt(selectedDoctor));

        try {
            await addAppointment({
                patientId: user.id,
                patientName: user.name,
                doctorId: doctor.id,
                doctorName: doctor.name,
                specialization: doctor.specialization,
                date,
                time,
                reason
            });
            alert('Appointment booked successfully!');
            if (onSuccess) onSuccess();
        } catch (error) {
            alert('Failed to book appointment');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
                <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    required
                >
                    <option value="">Choose a specialist...</option>
                    {doctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.name} - {doc.specialization}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                        type="time"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                <textarea
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    placeholder="Briefly describe your symptoms..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                {isLoading ? 'Booking...' : 'Confirm Appointment'}
            </button>
        </form>
    );
}
