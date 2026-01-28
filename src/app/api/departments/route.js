import { NextResponse } from "next/server";
// import doctors from "@/models/doctors";
import dbConnect from "@/lib/db";
import departments from "@/models/departments";

export async function GET(){
    try{
        await dbConnect();
        const allDepartments= await departments.find({});
        return NextResponse.json({message:"All departments fetched",data:allDepartments},{status:200});
    }catch(error){
        return NextResponse.json({message:"Error fetching departments",status:500,error:error.message});
    }
}

export async function POST(request){
    try{
        await dbConnect();
        const reqBody =  await request.json();
        const newDept = await departments.create(reqBody);
        return NextResponse.json({message:"Department created successfully",data:newDept},{status:201});
    }
    catch(error){
        return NextResponse.json({message:"Error creating department",status:500,error:error.message});
    }
}