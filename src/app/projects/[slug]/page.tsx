import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import ProjectDetailComponent from '@/components/ProjectDetailComponent'

type Project = {
  id: string
  title: string | null
  slug: string | null
  image_url: string | null
  description: string | null
  tech: string[] | null
  created_at: string | null
  link_sourcecode: string | null
  video: string | null
  price: number
}

// ISR: Revalidate setiap 1 jam
export const revalidate = 3600;

async function getProjectData(slug: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value || null
        },
      },
    }
  )

  try {
    const { data, error } = await supabase
      .from('project')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error('Supabase error:', error.message)
      return null
    }

    if (!data) {
      return null
    }

    return data as Project
  } catch (err) {
    console.error('Unexpected error:', err)
    return null
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = await getProjectData(resolvedParams.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Proyek tidak ditemukan atau terjadi error</h1>
      </div>
    )
  }

  return <ProjectDetailComponent project={project} />
}