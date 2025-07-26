'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function MediaSlider({
  images,
  video,
}: {
  images: string[]
  video?: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const mediaList = [...(video ? [video] : []), ...images]

  return (
    <div className="w-full">
      <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
        {mediaList[activeIndex]?.endsWith('.mp4') ? (
          <video
            src={mediaList[activeIndex]}
            controls
            className="w-full h-full object-cover"
            poster="/placeholder.jpg"
          />
        ) : (
          <Image
            src={mediaList[activeIndex] || '/placeholder.jpg'} // Fallback jika src kosong
            alt="media"
            width={1280} // Sesuaikan dengan lebar maksimum yang diharapkan
            height={720} // Sesuaikan dengan tinggi maksimum yang diharapkan
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {mediaList.length > 1 && (
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {mediaList.map((media, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-16 h-16 rounded border ${
                idx === activeIndex ? 'border-black' : 'border-gray-300'
              }`}
            >
              {media.endsWith('.mp4') ? (
                <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs rounded">
                  Video
                </div>
              ) : (
                <Image
                  src={media || '/placeholder.jpg'} // Fallback jika src kosong
                  alt={`thumb-${idx}`}
                  width={64} // Sesuaikan dengan lebar thumbnail (16x4)
                  height={64} // Sesuaikan dengan tinggi thumbnail
                  className="w-full h-full object-cover rounded"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}