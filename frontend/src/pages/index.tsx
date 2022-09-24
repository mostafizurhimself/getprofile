import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServiceSection />
      <RecentWorkSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </AppLayout>
  );
};

export default Home;
