import { NextResponse } from "next/server";
import Doctors from "@/models/doctors";
import dbConnect from "@/lib/db";


export async function PUT(request, { params }){
    try{
        await dbConnect();

        const body = await request.json();
        const {id} = params;
        
        const updateDoctor = await Doctors.findByIdAndUpdate(id,body,{
            new:true,
            runValidators:true
        });
        if(!updateDoctor){
            return NextResponse.json({message:"Doctor not found"},{status:404});
        }
        return NextResponse.json({message:"Doctor updated successfully",doctor:updateDoctor},{status:200});
    }
    catch(err){
        console.error("Error fetching Doctor:",err);
    }
}

export async function DELETE(request,{params}){
    try{
        await dbConnect();
        const {id}=params;
        const deleteDoctor =  await Doctors.findByIdAndDelete(id);

        if(!deleteDoctor){
            return NextResponse.json({message:"Doctor not found!"},{status:400});
        }
        return NextResponse.json({message:"Doctor deleted successfully"},{status:200});

    }catch(error){
        console.error("Error in deleting a doctor",error.message);
        return NextResponse.json({message:"Failed to fetched a doctor"},{status:500},{error:error.message});
    }
}