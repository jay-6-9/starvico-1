import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-950 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-primary-500 font-bold text-xl mb-4">STARVICO</div>
            <p className="text-dark-400 mb-6">
              Transforming businesses with intelligent automation solutions that drive growth and reduce costs.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {['Customer Support', 'CRM Integration', 'Automated Outreach', 'Custom Websites'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-800 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Starvico. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;