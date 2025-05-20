import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-20 overflow-hidden bg-dark-900 min-h-[90vh] flex items-center"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transforming Businesses with <span className="text-primary-400">Intelligent</span> Automation
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-dark-300 mb-8 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Unlock your business's full potential with cutting-edge automation solutions. From customer support to lead generation, we streamline your operations to drive growth and reduce costs.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button size="lg">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" className="group">
              <span>Book a Consultation</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>

        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { number: '90%', text: 'Cost Reduction' },
            { number: '24/7', text: 'Customer Support' },
            { number: '3x', text: 'Lead Generation' },
            { number: '99.9%', text: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-dark-700 hover:border-primary-600/50 transition-all hover:transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
              <div className="text-dark-300 text-sm md:text-base">{stat.text}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;