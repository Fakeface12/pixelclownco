'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
// Hapus impor useRouter dan usePathname karena tidak digunakan
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PixelClown Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold tracking-tight text-black">
            PixelClown
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/projects" className="hover:text-black transition">Projects</Link>
          <Link href="/build" className="hover:text-black transition">Build With Us</Link>
          <Link href="/about" className="hover:text-black transition">Abouts</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/build" className="hover:text-black transition">Build With Us</Link>
          <Link href="/about" className="hover:text-black transition">Abouts</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>
      )}
    </header>
  )
}