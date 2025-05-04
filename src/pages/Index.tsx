import { useState } from 'react';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/Footer';

const Index = () => {
  const [, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background animation */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <Navigation onSectionChange={setActiveSection} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
