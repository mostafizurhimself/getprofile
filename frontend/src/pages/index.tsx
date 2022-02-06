import type { NextPage } from "next";
import AppLayout from "@/layouts/AppLayout";
import HeroSection from "@/components/partials/HeroSection";
import AboutSection from "@/components/partials/AboutSection";
import StatisticsSection from "@/components/partials/StatisticsSection";
import ServiceSection from "@/components/partials/ServiceSection";
import ExperienceSection from "@/components/partials/ExperienceSection";
import RecentWorkSection from "@/components/partials/RecentWorkSection";

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <ExperienceSection />
      <ServiceSection />
      <RecentWorkSection />
    </AppLayout>
  );
};

export default Home;
