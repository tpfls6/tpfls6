import ContactSection from '@/components/home/ContactSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import MoreWorks from '@/components/home/MoreWorks';
import StrengthsSection from '@/components/home/StrengthsSection';
import HomeNavigation from '@/components/home/HomeNavigation';

export default function Home() {
  return (
    <main className="page">
      <HomeNavigation />
      <Hero />
      <StrengthsSection />
      <FeaturedProjects />
      <MoreWorks />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
