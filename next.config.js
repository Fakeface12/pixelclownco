/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'eftdgsegwekbtgyagsht.supabase.co',
          port: '',
          pathname: '/storage/v1/object/public/media/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig