import Schedule from "../components/Schedule/Schedule";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
    title: 'Weekly OPD Schedule | Fatimiyah Hospital',
    description: 'View our weekly OPD schedule for all departments and doctors.',
};

export default function SchedulePage() {
    return (
        <>
            <Header />
            <Schedule />
            <Footer />
        </>
    )
}
