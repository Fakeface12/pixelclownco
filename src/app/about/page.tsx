'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
} from 'react-icons/si'

export default function AboutPage() {
  const techStack = [
    { name: 'HTML5', icon: <SiHtml5 size={48} color="#E34F26" /> },
    { name: 'CSS3', icon: <SiCss3 size={48} color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={48} color="#F7DF1E" /> },
    { name: 'PHP', icon: <SiPhp size={48} color="#777BB4" /> },
    { name: 'Laravel', icon: <SiLaravel size={48} color="#FF2D20" /> },
    { name: 'React', icon: <SiReact size={48} color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={48} color="#000000" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} color="#38BDF8" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={48} color="#7952B3" /> },
  ]

  return (
    <main className="bg-white text-gray-900 px-6 md:px-24 py-28 space-y-32">
      
      {/* Tentang + Cerita Kami */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      >
        {/* Tentang Kami */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Logo PixelClown"
              width={64}
              height={64}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold text-black">Tentang PixelClown</h1>
          </div>
          <p className="text-lg text-gray-700">
            Kami adalah tim kecil dengan semangat besar. Fokus kami adalah membangun <strong>website</strong> dan <strong>aplikasi mobile</strong> yang modern, cepat, dan efisien.
          </p>
        </div>

        {/* Cerita Kami */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-black">Cerita Kami</h2>
          <p className="text-gray-700 text-lg">
            PixelClown lahir dari misi sederhana: menciptakan solusi digital yang tidak hanya menarik secara visual, tetapi juga punya dampak nyata.
          </p>
          <p className="text-gray-700 text-lg">
            Kami percaya bahwa teknologi adalah alat untuk menyelesaikan masalah nyata. Dengan pendekatan personal dan stack modern, kami bantu klien membangun produk digital yang scalable dan relevan.
          </p>
          <p className="text-gray-700 text-lg">
            Spesialisasi kami adalah di bidang <strong>Web Development</strong> dan <strong>Mobile Development</strong>. Kami tidak menjanjikan yang mustahil—kami mengerjakan yang masuk akal, cepat, dan solid.
          </p>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-black mb-8">Tech yang Kami Gunakan</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              {tech.icon}
              <span className="text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-black text-white py-16 px-6 md:px-24 rounded-3xl text-center space-y-6"
      >
        <h2 className="text-3xl font-semibold">Tertarik Kolaborasi?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Jika kamu butuh tim untuk bantu bangun web atau aplikasi mobile-mu, kami siap bantu dari awal sampai launch.
        </p>
        <a
          href="/build"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-200"
        >
          Bangun Proyek Bersama Kami
        </a>
      </motion.section>
    </main>
  )
}
