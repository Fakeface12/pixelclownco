'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  id: string
  title: string
  slug: string
  image_url: string
  description: string
  tech: string[]
}

type Props = {
  project: Project
  index: number // untuk delay animasi per card
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Gambar Project */}
      <Image
        src={project.image_url}
        alt={project.title}
        width={384} // 2x h-48 (192px) untuk retina display
        height={192} // h-48 (48 * 4 = 192px jika 1rem = 4px atau sesuai konteks)
        className="w-full h-48 object-cover"
      />

      {/* Konten */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Judul */}
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>

        {/* Tombol CTA */}
        <a
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center justify-center bg-black text-white text-sm font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-200 ease-in-out hover:scale-105"
          onClick={e => e.stopPropagation()} // Supaya klik tombol gak trigger hover card
        >
          Lihat Detail
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}