import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image = 'placeholder.svg', 
  tags 
}) => {
  return (
    <div className="glass group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-80 z-10" />
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="relative z-20 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full border border-accent/30 text-accent bg-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30 transition-colors">
            Ver detalhes
          </button>
        </div>
      </div>
      
      {/* Neon border effect on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-accent/50 group-hover:shadow-[inset_0_0_15px_rgba(30,174,219,0.3)] rounded-xl transition-all duration-500" />
    </div>
  );
};
