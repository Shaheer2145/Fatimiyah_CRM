import { NextResponse } from 'next/server';
import doctors from '@/lib/mockData/doctors.json';
import appointments from '@/lib/mockData/appointments.json';
import users from '@/lib/mockData/users.json';

export async function GET() {
    // Return aggregate stats
    const stats = {
        totalDoctors: doctors.length,
        totalPatients: users.filter(u => u.role === 'patient').length,
        totalAppointments: appointments.length,
        pendingAppointments: appointments.filter(a => a.status === 'pending').length
    };

    return NextResponse.json(stats);
}
