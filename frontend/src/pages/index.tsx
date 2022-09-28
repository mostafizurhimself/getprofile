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
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      <section className="container py-16">
        <ExperienceSection />
      </section>
      <section className="container py-16">
        <ServiceSection />
      </section>
      <section className="container py-16">
        <RecentWorkSection />
      </section>
      <section className="container py-16">
        <TestimonialSection />
      </section>
      <section className="container py-16">
        <BlogSection />
      </section>
      <section className="container py-16">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

export default Home;
