'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'
import { TypeAnimation } from 'react-type-animation'

type Project = {
  id: string
  title: string
  slug: string
  image_url: string
  description: string
  tech: string[]
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('project')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setProjects(data)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen w-full bg-white text-gray-800 px-6 py-24">
      {/* Hero Section with Typing Animation */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <TypeAnimation
          sequence={[
            'Jelajahi Proyek Unggulan Kami',
            2000,
            'Bangun Bersama Teknologi Modern',
            2000,
            'Solusi Digital yang Menginspirasi',
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight"
        />
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Koleksi karya digital yang kami bangun dengan teknologi modern dan sentuhan kreatif.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Cari project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 rounded-xl py-3 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
        />
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Tidak ada project ditemukan.
          </p>
        )}
      </div>
    </main>
  )
}
