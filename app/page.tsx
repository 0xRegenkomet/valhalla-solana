import { HeroSection } from "@/components/hero-section"
import { SocialsSection } from "@/components/socials-section"
import { ChartSection } from "@/components/chart-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { MemesSection } from "@/components/memes-section"

export default function Home() {
  return (
    <main className="min-h-screen viking-background">
      {/* Scattered sword emojis */}
      {Array.from({ length: 40 }, (_, i) => (
        <span key={i} className="sword-emoji">⚔️</span>
      ))}
      
      <Navbar />
      <HeroSection />
      <SocialsSection />
      <ChartSection />
      <MemesSection />
      <Footer />
    </main>
  )
}
