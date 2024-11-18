import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Handshake, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PartnerCardProps {
  name: string;
  description: string;
  logo: string;
  type: string;
}

function PartnerCard({ name, description, logo, type }: PartnerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-24 flex items-center justify-center mb-6">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="text-center">
        <span className="text-sm text-blue-600 font-medium mb-2 block">{type}</span>
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function Partners() {
  const partners = [
    {
      name: 'Xaveri GIVE HOPE',
      description: 'Collaborating on youth empowerment and digital literacy initiatives across Rwanda.',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Community Partner'
    },
    {
      name: 'Rwanda ICT Chamber',
      description: 'Working together to strengthen the technology ecosystem in Rwanda.',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Industry Partner'
    },
    {
      name: 'Kigali Innovation Hub',
      description: 'Collaborating on tech innovation and startup development programs.',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Innovation Partner'
    },
    {
      name: 'Digital Skills Academy',
      description: 'Partnership focused on providing quality tech education and training.',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Education Partner'
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Network',
      description: 'Access to international tech communities and resources'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Shared Expertise',
      description: 'Combined knowledge and experience in technology and innovation'
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: 'Collaborative Growth',
      description: 'Joint initiatives for community development and impact'
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Partners"
        subtitle="Building Success Through Strong Partnerships"
      />

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in our mission to transform Rwanda's digital landscape. Together, 
              we can create more opportunities and drive innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}