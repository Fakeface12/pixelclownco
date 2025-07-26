'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

// Definisikan interface untuk props
interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: string; // Opsional karena ada default 'text'
}

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}

interface FeatureProps {
  title: string;
  desc: string;
}

export default function BuildWithUsPage() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const { nama, email, phone, message } = form
    if (!nama || !email || !phone || !message) {
      toast.error('Harap lengkapi semua kolom!')
      return
    }

    const waMessage = encodeURIComponent(
      `Halo PixelClown! Saya ${nama}.\nEmail: ${email}\nNo HP: ${phone}\n\nProyek:\n${message}`
    )

    toast.success('Mengalihkan ke WhatsApp...')
    window.open(`https://wa.me/6287728637231?text=${waMessage}`, '_blank')
  }

  return (
    <main className="bg-white text-gray-900 px-6 md:px-24 py-28 space-y-36">
      {/* Hero + Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start"
      >
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Bangun Proyek Bersama Kami
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ceritakan ide atau kebutuhanmu — kami bantu realisasikan jadi solusi digital modern.
            Hubungi kami melalui formulir berikut, dan kami akan segera merespons.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-6"
        >
          <div className="grid gap-5">
            <Input label="Nama Lengkap" name="nama" placeholder="Contoh: PixelClown." value={form.nama} onChange={handleChange} />
            <Input label="Email" name="email" placeholder="pixelclown57@gmail.com" type="email" value={form.email} onChange={handleChange} />
            <Input label="No. WhatsApp" name="phone" placeholder="08xxxxxx" value={form.phone} onChange={handleChange} />
            <Textarea label="Ceritakan Proyekmu" name="message" placeholder="Saya ingin membangun aplikasi edukasi..." value={form.message} onChange={handleChange} />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-black text-white w-full py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            Kirim & Hubungi via WhatsApp
          </button>

          <p className="text-sm text-gray-500 text-center">
            Kami akan membalas dalam waktu 24 jam atau lebih cepat.
          </p>
        </motion.div>
      </motion.section>

      {/* Section: Kenapa Memilih Kami */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-14"
      >
        <h2 className="text-4xl font-semibold tracking-tight">Kenapa Memilih PixelClown?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left text-gray-700 text-lg">
          <Feature title="Efisien & Fokus Hasil" desc="Kami mengerjakan dengan cepat, namun tetap menjaga kualitas. Fokus pada solusi, bukan drama." />
          <Feature title="Desain yang Dipikirkan" desc="Tampilan menarik + pengalaman pengguna yang diprioritaskan." />
          <Feature title="Komunikasi Transparan" desc="Diskusi terbuka sejak awal. Kamu tahu progresnya, kami tahu ekspektasimu." />
          <Feature title="Stack Teknologi Modern" desc="Menggunakan Next.js, Tailwind, Supabase, dan tools terbaru untuk hasil maksimal." />
        </div>
      </motion.section>
    </main>
  )
}

function Input({ label, name, value, onChange, placeholder, type = 'text' }: InputProps) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none transition"
      />
    </div>
  )
}

function Textarea({ label, name, value, onChange, placeholder }: TextareaProps) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none transition resize-none"
      />
    </div>
  )
}

function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900 text-lg">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}