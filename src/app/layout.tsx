// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PixelClown.Co',
  description: 'Bangun Masa Depan dengan Desain Modern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-black">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
