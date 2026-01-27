import { NextResponse } from 'next/server';
import User from '@/models/user';
import dbConnect from '@/lib/db';
import { unstable_isUnrecognizedActionError } from 'next/dist/client/components/navigation.react-server';

export async function POST(request) {
    try {
        await dbConnect();
        console.log("Database connected in login route");
        const body = await request.json();
        const { email, password } = body;

        
        const user = User.find(u => u.email === email && u.password === password);
        if(!user){
            return NextResponse.json({message:"Invalid mail or password"},{status:400});
        }

        if (user) {
            // Remove password from response
            const { password, ...userWithoutPass } = user;
            return NextResponse.json({
                message: 'Login successful',
                user: userWithoutPass,
                token: 'mock-jwt-token-12345'
            });
        }

        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ message: 'Login failed' }, { status: 500 });
    }
}
