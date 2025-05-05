// import React from 'react';
import { ThreeDModel } from '../ThreeDModel';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden py-20">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-futuristic-darker/0 to-futuristic-darker/90 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-white">Olá, sou</span>
              <span className="block text-gradient neon-glow mt-2">Developer</span>
            </h1>
            
            <p className="text-lg text-gray-950 mb-8 max-w-lg">
              Criando experiências digitais futuristas com animações 3D e design moderno. 
              Meu trabalho combina estética e funcionalidade para criar interfaces envolventes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-accent text-futuristic-darker font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30">
                 <a href="#projects">Meus Projetos</a>
              </button>
              <button className="px-6 py-3 rounded-full bg-transparent border border-white/30 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/10 hover:border-white/50">
                <a href="#contact">Entre em Contato</a>
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ThreeDModel />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-fade-in hidden sm:flex"
        style={{ animationDelay: '1s' }}
        onClick={() => {
          const nextSection = document.querySelector('#about'); // Substitua '#projects' pelo ID da próxima seção
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-sm text-gray-400 mb-2 cursor-pointer">Scroll</span>
        <div className="h-12 w-0.5 bg-gradient-to-b from-accent to-transparent animate-pulse-glow cursor-pointer" />
      </div>
    </section>
  );
};
