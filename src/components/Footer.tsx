'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
        {/* Deskripsi / Tentang */}
        <div>
          <h2 className="text-xl font-bold mb-4">PixelClown.Co</h2>
          <p className="text-gray-400">
            Platform karya digital & project showcase. Bangun masa depan bareng teknologi.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="/#projects" className="hover:underline">Project</Link></li>
            <li><Link href="/#about" className="hover:underline">Tentang</Link></li>
            <li><Link href="/#contact" className="hover:underline">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Saya</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:yourfavclown57@gmail.com" className="hover:text-white">yourfavclown57@gmail.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/6287728637231" className="hover:text-white" target="_blank">+62 877-2863-7231</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} PixelClown.Co — All rights reserved.
      </div>
    </footer>
  )
}
