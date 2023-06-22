import Navbar from '@/components/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'
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
            <body className={`${font.className} background px-6 md:px-40 py-2 md:py-5 min-h-screen`}>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
