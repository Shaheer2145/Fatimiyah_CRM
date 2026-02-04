import './globals.css'
import { MockStoreProvider } from '@/context/MockStoreContext';
import { Katibeh } from 'next/font/google';


const katibehFont = Katibeh({
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
            <body className={katibehFont.className}>
                <MockStoreProvider>
                    {children}
                </MockStoreProvider>
            </body>
        </html>
    )
}
