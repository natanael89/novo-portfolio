import { ProjectCard } from '../ProjectCard';
import post1 from '../../assets/img/analistaDeDados.png';
import post2 from '../../assets/img/e-commerce.png';
import post3 from '../../assets/img/realidadeVirtual.png';

const projects = [
  {
    title: "App de Análise de Dados",
    description: "Dashboard interativo com visualizações 3D de dados financeiros em tempo real.",
    tags: ["React", "Three.js", "TypeScript"],
    image: post1
  },
  {
    title: "E-commerce Futurista",
    description: "Plataforma de compras com experiência imersiva e visualização 3D de produtos.",
    tags: ["Next.js", "Three.js", "TailwindCSS"],
    image: post2
  },
  {
    title: "Aplicativo de Realidade Virtual",
    description: "Experiência VR para treinamento em ambientes industriais simulados.",
    tags: ["WebXR", "Three.js", "React"],
    image: post3
  },
  {
    title: "Portfólio Interativo",
    description: "Site com elementos 3D interativos e animações responsivas.",
    tags: ["React", "GSAP", "Three.js"],
    image: "https://img.ahazou.com/tr:n-ahzdcb-post/ahz-posts/f728bde5-e132-4b29-80f2-0e68d1661691/midia/post-3a7d4663-a4fc-46ef-97af-d6ea93adc17a.png"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-futuristic-purple/5 to-transparent z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Meus Projetos</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Explore meus trabalhos recentes em desenvolvimento web e design interativo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <button className="px-8 py-3 rounded-full bg-transparent border border-accent/50 text-accent hover:bg-accent/10 transition-colors">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};
