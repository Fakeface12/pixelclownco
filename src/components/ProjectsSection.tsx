'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ProjectCard from './ProjectCard'

type Project = {
  id: string
  title: string
  slug: string
  image_url: string
  description: string
  tech: string[]
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('project')
        .select('id, title, slug, image_url, description, tech')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching projects:', error.message)
      } else {
        setProjects(data || [])
      }

      setLoading(false)
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase()
    return (
      project.title.toLowerCase().includes(term) ||
      project.tech.join(' ').toLowerCase().includes(term)
    )
  })

  return (
    <section id="projects" className="px-6 md:px-12 py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Projects</h2>
          <p className="text-base md:text-lg mt-4 text-gray-500">
            Explore the tech we build — simple, scalable, and powerful.
          </p>
        </div>

        {/* 🔍 Search Input */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search projects by title or tech..."
            className="w-full max-w-xl px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid Project */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
