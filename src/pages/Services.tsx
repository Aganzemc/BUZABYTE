import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Code, Users, BookOpen, Laptop, Server, Brain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Application Development',
      description: 'Custom software solutions tailored to your business needs',
      features: [
        'Web application development',
        'Mobile app development',
        'API integration and development',
        'UI/UX design and implementation'
      ]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Technical Infrastructure',
      description: 'Robust and scalable infrastructure solutions',
      features: [
        'Cloud architecture design',
        'Database optimization',
        'System integration',
        'Performance monitoring'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Coaching & Mentorship',
      description: 'Nurturing the next generation of tech talent',
      features: [
        'One-on-one mentoring',
        'Technical skill development',
        'Career guidance',
        'Project-based learning'
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Knowledge Sharing',
      description: 'Spreading technical expertise and best practices',
      features: [
        'Technical workshops',
        'Code review sessions',
        'Best practices training',
        'Technology stack guidance'
      ]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Helping organizations embrace digital innovation',
      features: [
        'Digital strategy consulting',
        'Process automation',
        'Legacy system modernization',
        'Technology adoption planning'
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Innovation Lab',
      description: 'Exploring cutting-edge technologies and solutions',
      features: [
        'Proof of concept development',
        'Technology research',
        'Innovation workshops',
        'Emerging tech adoption'
      ]
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Technology Solutions for Your Success"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose BUZABYTE?</h2>
            <p className="text-gray-600 mb-12">
              We combine technical expertise with a deep understanding of the local context
              to deliver solutions that make a real impact in DR Congo's digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: "Deep understanding of DR Congo's tech ecosystem and business environment"
              },
              {
                title: 'Quality Focus',
                description: 'Commitment to delivering high-quality, scalable solutions'
              },
              {
                title: 'Community Impact',
                description: "Contributing to DR Congo's digital transformation and tech community growth"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}