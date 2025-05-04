

export const AboutSection = () => {
  const skills = [
    { name: "Design de UI/UX", level: 90 },
    { name: "React & TypeScript", level: 85 },
    { name: "Modelagem 3D", level: 75 },
    { name: "Animação Web", level: 80 }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-3xl rounded-full z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Sobre Mim</h2>
            
            <p className="text-gray-950 mb-6">
              Sou um desenvolvedor front-end apaixonado por criar experiências digitais imersivas e interativas.
              Especializo-me na interseção entre design e código, trazendo conceitos futuristas para a realidade.
            </p>
            
            <p className="text-gray-950 mb-8">
              Com experiência em React, Three.js e animações avançadas, busco sempre empurrar os limites
              do que é possível fazer na web, criando interfaces que surpreendem e encantam os usuários.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div className="text-center glass p-4">
                <span className="block text-3xl font-bold text-accent">5+</span>
                <span className="text-sm text-gray-700">Anos de Experiência</span>
              </div>
              <div className="text-center glass p-4">
                <span className="block text-3xl font-bold text-accent">50+</span>
                <span className="text-sm text-gray-700">Projetos</span>
              </div>
              <div className="text-center glass p-4">
                <span className="block text-3xl font-bold text-accent">30+</span>
                <span className="text-sm text-gray-700">Clientes</span>
              </div>
              <div className="text-center glass p-4">
                <span className="block text-3xl font-bold text-accent">10+</span>
                <span className="text-sm text-gray-700">Prêmios</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-white">Minhas Habilidades</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-neon-purple animate-fade-in" 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${0.5 + index * 0.1}s` 
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">React</span>
                </div>
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">Three.js</span>
                </div>
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">WebGL</span>
                </div>
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">Blender</span>
                </div>
                <div className="glass p-3 flex items-center justify-center">
                  <span className="text-sm">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
