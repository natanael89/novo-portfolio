import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  const navigationItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/70 backdrop-blur-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-bold text-gradient pr-3">DevFlex</div>
        <ul className="flex space-x-8">
          {navigationItems.map(item => (
            <li key={item.id}>
              <button 
                className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                onClick={() => {
                  onSectionChange(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent animate-pulse-glow" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
