'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

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

const ProjectDetailComponent: React.FC<{ project: Project }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'paid' | 'unpaid'>('unpaid')
  const [isChecking, setIsChecking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video && project.video) {
      const checkVideo = () => {
        if (video.readyState >= 2) {
          setIsLoading(false)
        } else if (video.error) {
          setIsLoading(false)
          setHasError(true)
        }
      }

      video.addEventListener('loadeddata', checkVideo)
      video.addEventListener('error', checkVideo)
      video.load()

      const timeoutId = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false)
          setHasError(true)
        }
      }, 3000)

      return () => {
        video.removeEventListener('loadeddata', checkVideo)
        video.removeEventListener('error', checkVideo)
        clearTimeout(timeoutId)
      }
    } else {
      setIsLoading(false)
      setHasError(true)
    }
    // Animasi masuk saat komponen dimuat
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.video])

  const checkPaymentStatus = async () => {
    setIsChecking(true)
    try {
      const response = await fetch(`/api/check-payment?projectId=${project.id}&userId=USER_ID_HERE`)
      const data = await response.json()
      if (data.status === 'paid') {
        setPaymentStatus('paid')
        // Otomatis alihkan ke link_sourcecode jika ada
        if (project.link_sourcecode) {
          window.location.href = project.link_sourcecode
        }
      } else {
        setPaymentStatus('unpaid')
      }
    } catch (error) {
      console.error('Error checking payment:', error)
      setPaymentStatus('unpaid')
    }
    setIsChecking(false)
  }

  const handlePayClick = () => {
    const saweriaUrl = `https://saweria.co/yourfavclown05?project=${project.id}`
    window.open(saweriaUrl, '_blank')
    checkPaymentStatus() // Mulai memeriksa status setelah mengarahkan ke Saweria
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          <div className="space-y-8 transform transition-all duration-500 hover:scale-105">
            {project.video && (
              <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Demo</h2>
                {isLoading && (
                  <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                    Loading video...
                  </div>
                )}
                {!isLoading && (
                  <video
                    ref={videoRef}
                    controls
                    className="w-full rounded-lg transition-opacity duration-300"
                    preload="auto"
                    onLoadedData={() => setIsLoading(false)}
                  >
                    <source src={project.video} type="video/mp4" />
                    {hasError && <p className="text-red-600 mt-2">Video failed to load. Check permissions or URL.</p>}
                  </video>
                )}
              </div>
            )}
            {project.image_url && (
              <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:-translate-y-2">
                <Image
                  src={project.image_url}
                  alt={project.title || 'Project Image'}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 transform transition-all duration-500 hover:shadow-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{project.title}</h1>
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Features</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech &&
                  project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full transition-colors duration-300 hover:bg-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-6">Rp{project.price.toLocaleString()}</p>
            {project.link_sourcecode && (
              <div>
                {paymentStatus === 'unpaid' && (
                  <button
                    onClick={handlePayClick}
                    disabled={isChecking}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isChecking ? 'Checking...' : 'Pay to View Source Code'}
                  </button>
                )}
                {paymentStatus === 'paid' && (
                  <a
                    href={project.link_sourcecode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailComponent