import Navbar from '@/components/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const font = Poppins({
    weight: "500",
    subsets: ["latin"],
})

export const metadata = {
    title: 'Ragnar',
    description: 'Ragnar window manager', 
    keywords: ['ragnar', 'window manager']
}

export default function RootLayout({
    children,
}: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body className={`${font.className} background`}>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}
