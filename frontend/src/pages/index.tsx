import type { NextPage } from 'next'
import AppLayout from '@/layouts/AppLayout'
import HeroSection from '@/components/partials/HeroSection'
import AboutSection from '@/components/partials/AboutSection'

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <AboutSection />
    </AppLayout>
  )
}

export default Home
