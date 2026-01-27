import { NextResponse } from 'next/server';
import services from '@/lib/mockData/services.json';

export async function GET() {
    return NextResponse.json(services);
}
