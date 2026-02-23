import './globals.css'

import { Katibeh } from 'next/font/google';


const katibeh = Katibeh({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Fatimiyah Hospital',
    description: 'Health Solutions in every Stage of Life',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={katibeh.className}>

                {children}

            </body>
        </html>
    )
}
