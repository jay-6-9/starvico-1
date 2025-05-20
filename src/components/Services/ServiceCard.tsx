import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import Button from '../ui/Button';
import { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.FC<{ className?: string, size?: number }>;

  // Determine whether to animate from left or right
  const isEven = index % 2 === 0;
  
  return (
    <div 
      id={service.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl ${service.background || 'bg-dark-800'} border border-dark-700 transition-all duration-300 ${isHovered ? 'shadow-lg shadow-primary-900/20 border-primary-500/30' : ''}`}
    >
      <div className="p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 text-primary-400">
              {IconComponent && <IconComponent size={24} />}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white">{service.title}</h3>
          </div>
        </div>

        <p className="mt-3 text-dark-300">{service.description}</p>

        <div className="mt-6 space-y-4">
          {service.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="relative pl-7 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-primary-500/30 before:ring-2 before:ring-primary-500 before:ring-offset-2 before:ring-offset-dark-800"
            >
              <h4 className="font-medium text-white">{feature.title}</h4>
              <p className="mt-1 text-sm text-dark-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="accent">
            {service.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;