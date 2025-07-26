import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import ProjectDetailComponent from '@/components/ProjectDetailComponent';
import Link from 'next/link';

type Project = {
  id: string;
  title: string | null;
  slug: string | null;
  image_url: string | null;
  description: string | null;
  tech: string[] | null;
  created_at: string | null;
  link_sourcecode: string | null;
  video: string | null;
  price: number;
};

// ISR: Revalidate setiap 1 jam
export const revalidate = 3600;

async function getProjectData(slug: string) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value || null;
        },
      },
    }
  );

  // Validasi environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Missing Supabase environment variables');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('project')
      .select('id, title, slug, image_url, description, tech, created_at, link_sourcecode, video, price')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Supabase query error:', error.message);
      return null;
    }

    if (!data) {
      console.error('No project found for slug:', slug);
      return null;
    }

    return data as Project;
  } catch (err) {
    console.error('Unexpected error fetching project:', err);
    return null;
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProjectData(resolvedParams.slug);

  if (!project) {
    notFound(); // Menggunakan notFound dari Next.js untuk halaman 404
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Link
        href="/projects"
        className="inline-flex items-center px-4 py-2 mb-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Kembali ke Daftar Proyek
      </Link>
      <ProjectDetailComponent project={project} />
    </div>
  );
}

// Metadata untuk SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProjectData(resolvedParams.slug);

  const title = project?.title || 'Project Not Found | PixelClown Co';
  const description = project?.description || 'Details of a project from PixelClown Co.';
  const image = project?.image_url || '/default-og-image.jpg'; // Ganti dengan default image jika tidak ada

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: `https://pixelclownco-29rro643y-pixelclowncos-projects.vercel.app/projects/${resolvedParams.slug}`,
      type: 'website',
    },
  };
}