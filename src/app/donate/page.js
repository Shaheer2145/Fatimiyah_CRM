
import DonateUS from '../components/Donate/DonateUS';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const metadata = {
    title: 'Donate | Fatmiyah Hospital',
    description: 'Support our cause by donating to Fatmiyah Hospital.',
};

export default function DonatePage() {
    return (
        <>
            <Header />
            <DonateUS />
            <Footer/>
        </>
    );
}
