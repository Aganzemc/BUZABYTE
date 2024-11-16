import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TeamMember } from '../components/TeamMember';
import { Target, Heart, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Mission',
      description: 'To empower individuals and organizations through innovative technology solutions and knowledge sharing.',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Values',
      description: 'Excellence, innovation, collaboration, and continuous learning drive everything we do.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community',
      description: 'Building a strong tech community in Bukavu through mentorship and knowledge exchange.',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Tech enthusiast with 10+ years of experience in software development.',
    },
    {
      name: 'Jane Smith',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Passionate about creating innovative solutions and mentoring young developers.',
    },
    {
      name: 'Mike Johnson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Dedicated to building and nurturing the tech community in DR Congo.',
    },
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="About BUZABYTE"
        subtitle="Empowering DRC's Digital Future"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded with a vision to transform DR Congo's tech landscape, BUZABYTE emerged from a 
              passion for technology and a commitment to community development. We believe in the 
              power of knowledge sharing and collaborative growth to build a stronger, more 
              technologically advanced DRC.
            </p>
            <p className="text-gray-600">
              Today, we continue to drive innovation through our software solutions while nurturing 
              the next generation of tech professionals through mentorship and educational initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}