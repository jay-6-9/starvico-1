import React, { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '',
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Reach out to our team to learn how our automation solutions can help drive growth and reduce costs for your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400">
                    <Mail size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email Us</h3>
                  <p className="mt-1 text-dark-300">info@starvico.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400">
                    <Phone size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Call Us</h3>
                  <p className="mt-1 text-dark-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Visit Us</h3>
                  <p className="mt-1 text-dark-300">123 Innovation Drive, Tech City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-xl p-8 border border-dark-700">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500/20 text-success-400 mb-4">
                  <Send size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-dark-300">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-700 border ${errors.name ? 'border-error-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-700 border ${errors.email ? 'border-error-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="customer-support">Automated Customer Support</option>
                      <option value="crm-integration">CRM Integration</option>
                      <option value="automated-outreach">Automated Outreach</option>
                      <option value="custom-websites">Custom Websites</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-dark-700 border ${errors.message ? 'border-error-500' : 'border-dark-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                      placeholder="Tell us about your needs..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="accent"
                      fullWidth
                      className="py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;