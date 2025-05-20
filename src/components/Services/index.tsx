import React from 'react';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Automation Solutions for Your Business
          </h2>
          <p className="text-dark-300 text-lg">
            From customer support to lead generation, our automation solutions help you streamline operations, reduce costs, and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;