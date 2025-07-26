import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TechnologySection from '@/components/TechnologySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <HeroSection />
      <ProjectsSection />
      <TechnologySection />
      <AboutSection />
      <ContactSection />
      {/* Next: BuildWithUsSection, AboutSection, dsb */}
    </main>
  )
}
