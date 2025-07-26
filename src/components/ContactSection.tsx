'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6 sm:px-10 md:px-20 text-center rounded-2xl shadow-inner"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Butuh Project Serupa?
      </h2>
      <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
        Gue siap bantu kamu bikin project keren! Kontak lewat email atau WhatsApp, langsung gaskeun!
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yourfavclown57@gmail.com"
          className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition flex items-center gap-2"
        >
          <HiOutlineMail className="text-lg" />
          Email
        </a>
        <a
          href="https://wa.me/6287728637231"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition flex items-center gap-2"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp
        </a>
      </div>
    </motion.section>
  )
}
