'use client'

import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from 'react-icons/si'

const technologies = [
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

export default function TechnologySection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Teknologi yang Kami Gunakan
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-24 h-24 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-110"
              title={tech.name}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
