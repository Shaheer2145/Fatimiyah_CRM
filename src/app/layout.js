import './globals.css'
import { Outfit } from 'next/font/google';
import { MockStoreProvider } from '@/context/MockStoreContext';


const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-main',
});

export const metadata = {
    title: 'Fatimiyah Hospital',
    description: 'Health Solutions in every Stage of Life',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={outfit.variable}>
            <body className={outfit.className}>
                <MockStoreProvider>
                    {children}
                </MockStoreProvider>
            </body>
        </html>
    )
}
