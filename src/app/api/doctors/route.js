import { NextResponse } from 'next/server';
import Doctors from "@/models/doctors";
import dbConnect from "@/lib/db";


export async function GET() {
    try{
        await dbConnect();

        const allDoctors = await Doctors.find({}).populate('appointments');
        return NextResponse.json({Doctors:allDoctors},{status:200});
    }
    catch(err){
        console.error("Fetch Doctors Error:", err);
        return NextResponse.json({message:"Failed to fetch doctors"},{status:500},{error:err.message});
    }
    
}

export async function POST(request){
    try{
        await dbConnect();

        const body= await req.json();
        const newDoctor = await Doctor.create(body);
        return NextResponse.json({message:"Doctor added successfully"},{status:200},{doctors:newDoctor})

    }
    catch(error){
        console.log("Error", error.message);
        return NextResponse.json({message:"Failed to add doctor"},{status:500},{error:error.message});
    }
}
