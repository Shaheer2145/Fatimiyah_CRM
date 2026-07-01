import './globals.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import getGlobals from "../lib/getGlobal";





export default async function RootLayout({ children }) {
    const headerData = await getGlobals('header');
    const footerData = await getGlobals('footer');

    return (
        <html lang="en">
            <body>
                <Header headerData={headerData} />
                {children}
                <Footer footerData={footerData} />
            </body>
        </html>
    )
}
