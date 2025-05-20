import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { 
      name: 'Solutions', 
      href: '#', 
      subItems: [
        { name: 'Customer Support', href: '#customer-support' },
        { name: 'CRM Integration', href: '#crm-integration' },
        { name: 'Automated Outreach', href: '#automated-outreach' },
        { name: 'Custom Websites', href: '#custom-websites' },
      ] 
    },
    { name: 'Contact', href: '#contact' },
  ];

  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-primary-500 font-bold text-xl sm:text-2xl">STARVICO</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.subItems ? (
                    <div>
                      <button 
                        className="flex items-center text-dark-100 hover:text-primary-400 font-medium transition-colors"
                        onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                      >
                        {link.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {openSubmenu === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-dark-800 border border-dark-700 rounded-lg shadow-xl py-2 animate-fade-in">
                          {link.subItems.map((subItem, idx) => (
                            <a 
                              key={idx} 
                              href={subItem.href}
                              className="block px-4 py-2 text-dark-200 hover:bg-dark-700 hover:text-primary-400 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-dark-100 hover:text-primary-400 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-dark-100 hover:text-primary-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 animate-slide-down">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subItems ? (
                  <div>
                    <button 
                      className="w-full text-left py-2 text-dark-100 hover:text-primary-400 font-medium transition-colors flex items-center justify-between"
                      onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transform transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === index && (
                      <div className="pl-4 space-y-1 border-l border-dark-700 ml-2 mt-1">
                        {link.subItems.map((subItem, idx) => (
                          <a 
                            key={idx} 
                            href={subItem.href}
                            className="block py-2 text-dark-300 hover:text-primary-400 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={link.href}
                    className="block py-2 text-dark-100 hover:text-primary-400 font-medium transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button fullWidth>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;