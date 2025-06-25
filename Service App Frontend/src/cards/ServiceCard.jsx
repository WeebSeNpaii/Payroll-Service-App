import React from 'react';
import { useInViewOnce } from '../ViewOnce';

const ServiceCard = ({ tech, techImage }) => {
  const [ref, hasBeenVisible] = useInViewOnce();

  return (
  
      <div
    
      ref={ref}
    
      className={`animated-card-border text-white transition-all duration-1000 p-[3px] 
      
        ${
        hasBeenVisible ? 'cards-appear' : 'opacity-0 translate-y-5'
      }`}
  
    >
      <img className="h-[220px] w-full" src={techImage} alt={tech} />
      <p className="p-5 text-xl font-semibold bg-[#0a001f]">{tech}</p>
    </div>
  
    
  );
};

export default ServiceCard;
