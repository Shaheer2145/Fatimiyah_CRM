import { NextResponse } from 'next/server';
import appointments from '@/lib/mockData/appointments.json';

export async function GET() {
    // In a real app, we would get the User ID from the session/token
    // Here we just return mock appointments for the demo user (id: 1)
    return NextResponse.json(appointments);
}
