import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        // Simulate booking appointment
        // In real app, save to DB
        return NextResponse.json({
            message: 'Appointment booked successfully',
            appointmentId: Date.now(),
            ...body
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Booking failed' }, { status: 500 });
    }
}
