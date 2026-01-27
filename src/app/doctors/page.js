
import DoctorList from "../components/DoctorList/DoctorList";
import doctors from "@/lib/mockData/doctors.json";
export default function DoctorsPage(){
    return <DoctorList doctors={doctors}/>
}