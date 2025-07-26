'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center gap-6 px-4 md:px-10 py-28 md:py-36 bg-[#f5f7fa] text-gray-800 overflow-hidden">
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#cbd5e110_1px,transparent_1px)] [background-size:36px_36px] opacity-20 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-center z-10 leading-tight"
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Build. Showcase. Repeat.
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-base md:text-lg text-center text-gray-600 z-10"
      >
        At PixelClown, we turn ideas into sleek, delightful, and powerful digital experiences. Let’s craft something extraordinary together.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-xl shadow hover:bg-gray-800 transition-all"
      >
        Explore Projects
      </motion.a>
    </section>
  )
}
