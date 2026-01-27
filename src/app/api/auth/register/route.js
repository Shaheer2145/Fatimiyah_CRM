import { NextResponse } from 'next/server';
import User from "@/models/user";
import dbConnect from '@/lib/db';
import User from '@/models/user';

export async function POST(request) {

    try {

        await dbConnect();
        console.log("Database connected in register route");


        const body = await request.json();
        const { email, password, name } = body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse,json({message:"User already exists"},{status:400});
        } 

        const newUser = new User.create({
            message:"User Created Successfully!",
            email,
            password,
            name,
            role:'patient'
        })

        return NextResponse.json({
            message: 'User registered successfully',
            user: { id: newUser._id, email:newUser.email, name:newUser.name , role: 'patient' }
        }, { status: 201 });
    } catch (error) {
        console.error("Reg Error:", error);
        return NextResponse.json({ message: 'Registration failed' }, { status: 500 });
    }
}
