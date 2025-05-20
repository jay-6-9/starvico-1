export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  cta: string;
  background?: string;
}

export const services: Service[] = [
  {
    id: 'customer-support',
    title: 'Automated Customer Support',
    description: 'Deliver exceptional support experiences 24/7 with our intelligent automation solutions that handle inquiries, resolve issues, and escalate when necessary.',
    icon: 'MessageSquareText',
    features: [
      {
        title: '24/7 Automated Assistance',
        description: 'Provide round-the-clock support without the staffing costs.',
      },
      {
        title: 'Intelligent Chat Agents',
        description: 'Deploy AI-powered chatbots that understand customer intent and deliver personalized responses.',
      },
      {
        title: 'Automated Callers',
        description: 'Streamline phone support with automated systems that can handle routine inquiries and route complex issues.',
      },
      {
        title: 'Seamless Integration',
        description: 'Connect with your existing CRM and support systems for unified operations.',
      },
      {
        title: 'Performance Analytics',
        description: 'Gain insights into support metrics and customer satisfaction to continuously improve.',
      },
      {
        title: 'Cost Reduction',
        description: 'Significantly lower support costs while improving response times and customer satisfaction.',
      },
    ],
    cta: 'Optimize Your Support',
    background: 'bg-gradient-to-br from-primary-700/20 to-primary-900/20',
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration',
    description: 'Enhance your customer relationship management with seamless integrations and automated workflows that save time and provide valuable insights.',
    icon: 'Database',
    features: [
      {
        title: 'Streamlined Workflow Solutions',
        description: 'Automate repetitive tasks and create efficient workflows that reduce manual effort.',
      },
      {
        title: 'Data Synchronization',
        description: 'Keep customer information consistent across all platforms and touchpoints.',
      },
      {
        title: 'Custom Automation',
        description: 'Build tailored automation rules and triggers specific to your business processes.',
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor key metrics and get actionable insights to optimize your customer relationships.',
      },
    ],
    cta: 'Streamline Your CRM',
    background: 'bg-gradient-to-br from-secondary-700/20 to-secondary-900/20',
  },
  {
    id: 'automated-outreach',
    title: 'Automated Outreach',
    description: 'Reach your target audience with precision using our automated outreach solutions that nurture leads and drive conversions.',
    icon: 'SendHorizonal',
    features: [
      {
        title: 'Targeted Campaign Management',
        description: 'Create and execute personalized outreach campaigns at scale.',
      },
      {
        title: 'Engagement Optimization',
        description: 'Maximize response rates with AI-driven timing and messaging optimizations.',
      },
      {
        title: 'Performance Metrics',
        description: 'Track campaign effectiveness with comprehensive analytics and reporting.',
      },
    ],
    cta: 'Enhance Your Outreach',
    background: 'bg-gradient-to-br from-accent-700/20 to-accent-900/20',
  },
  {
    id: 'custom-websites',
    title: 'Custom Websites',
    description: 'Create a powerful online presence with our professional web design and development services that incorporate intelligent lead generation.',
    icon: 'Globe',
    features: [
      {
        title: 'Professional Web Design',
        description: 'Get a stunning, responsive website tailored to your brand and business goals.',
      },
      {
        title: 'Intelligent Lead Generation',
        description: 'Convert visitors into leads with smart forms, CTAs, and personalized experiences.',
      },
      {
        title: 'Automated Prospect Identification',
        description: 'Identify high-value prospects through behavior analysis and engagement tracking.',
      },
      {
        title: 'Data-Driven Targeting',
        description: 'Use visitor data to create personalized experiences that boost conversion rates.',
      },
    ],
    cta: 'Build Your Website',
    background: 'bg-gradient-to-br from-success-700/20 to-success-900/20',
  },
];