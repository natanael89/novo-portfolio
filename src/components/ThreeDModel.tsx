import { useRef, useEffect } from 'react';
import perfilPost from '../assets/img/IMG_20231006_010502144_processed.jpg';

export const ThreeDModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Este é um espaço reservado para a implementação real do Three.js
    // Quando as dependências estiverem disponíveis, substituiremos isso pela implementação real
    const container = containerRef.current;
    if (!container) return;
    
    let rotationX = 0;
    let rotationY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isMouseDown = false;
    
    // Simular rotação do objeto 3D com CSS transforms
    const handleMouseDown = () => {
      isMouseDown = true;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      targetRotationY += e.movementX * 0.01;
      targetRotationX += e.movementY * 0.01;
      
      updateRotation();
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    const updateRotation = () => {
      if (!container) return;
      
      // Suavizar a rotação
      rotationX += (targetRotationX - rotationX) * 0.1;
      rotationY += (targetRotationY - rotationY) * 0.1;
      
      container.style.transform = `perspective(1000px) rotateX(${-rotationX}rad) rotateY(${rotationY}rad)`;
    };
    
    // Animação contínua
    const animate = () => {
      if (!isMouseDown) {
        // Rotação lenta automática quando não estiver interagindo
        targetRotationY += 0.005;
      }
      
      updateRotation();
      requestAnimationFrame(animate);
    };
    
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    animate();
    
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="w-64 h-64 relative cursor-grab active:cursor-grabbing animate-float"
      >
        {/* Placeholder cube with gradient colors */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple via-neon-blue to-purple-400 shadow-lg shadow-neon-purple/20" />
        
        {/* Placeholder text that will be replaced by actual 3D model */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
           <img src={perfilPost} alt="profile" />
        </div>
      </div>
    </div>
  );
};
