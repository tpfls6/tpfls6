import Hero from '../components/Hero';
import StrengthsSection from '../components/StrengthsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import MoreWorks from '../components/MoreWorks';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <StrengthsSection />
      <FeaturedProjects />
      <MoreWorks />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
