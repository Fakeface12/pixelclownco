'use client'

import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const contactMethods = [
  {
    name: 'Email',
    icon: <FaEnvelope size={32} />,
    link: 'mailto:yourfavclown57@gmail.com',
    label: 'yourfavclown57@gmail.com',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={32} color="#E1306C" />,
    link: 'https://instagram.com/pixelclown.co',
    label: '@pixelclown.co',
  },
  {
    name: 'TikTok',
    icon: <SiTiktok size={32} />,
    link: 'https://www.tiktok.com/@pixelclown.co?_t=ZS-8yK8A3s49EV&_r=1',
    label: '@pixelclown.co',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={32} />,
    link: 'https://github.com/Fakeface12',
    label: 'github.com/pixelclown.co',
  },
  {
    name: 'X (Twitter)',
    icon: <FaTwitter size={32} color="#1DA1F2" />,
    link: 'https://twitter.com/pixelclown.co',
    label: '@pixelclown.co',
  },
  {
    name: 'Whatsapp',
    icon: <FaWhatsapp size={32} color="#25D366" />,
    link: 'https://twitter.com/pixelclown.co',
    label: '@pixelclown.co',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 md:px-24 py-28 bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontak Kami</h1>
        <p className="text-lg text-gray-700 mb-16">
          Hubungi kami melalui platform favorit kamu. Kami siap untuk ngobrol santai atau mulai proyek keren bersama!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contactMethods.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              {contact.icon}
              <span className="mt-4 font-medium">{contact.name}</span>
              <span className="text-sm text-gray-500">{contact.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
