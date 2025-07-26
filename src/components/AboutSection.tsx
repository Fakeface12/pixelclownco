'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Textual Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Kami Membangun Solusi Digital Masa Depan
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            PixelClown adalah studio kreatif yang fokus pada pembuatan produk digital yang modern dan berdampak.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Kami percaya bahwa teknologi bisa menjadi alat transformasi. Dengan menggabungkan estetika, performa, dan fungsi,
            kami membangun aplikasi yang cepat, aman, dan elegan. Visi kami adalah menjadi fondasi untuk masa depan web yang lebih baik.
          </p>
        </motion.div>

        {/* Logo or Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="bg-white rounded-2xl p-6 w-[220px] h-[220px] flex items-center justify-center shadow-2xl">
            <Image
              src="/logo.png"
              alt="Logo PixelClown"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
