import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ExternalLink, Calendar, Users, Tag } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  client: string;
  link?: string;
}

function ProjectCard({ title, description, image, date, category, client, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Users className="h-4 w-4 mr-1" />
          <span>Client: {client}</span>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View Project <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Agricultural Management App',
      description: 'A comprehensive mobile application helping farmers track crops, manage resources, and optimize yields through data-driven insights.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'March 2024',
      category: 'Mobile App',
      client: 'Rwanda Farmers Association',
      link: '#'
    },
    {
      title: 'E-Learning Platform',
      description: 'An interactive platform providing tech education to students across Rwanda, featuring video courses, coding exercises, and real-time mentorship.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'January 2024',
      category: 'Web Application',
      client: 'Ministry of Education',
      link: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'A digital solution streamlining patient records, appointments, and medical inventory management for local clinics.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'December 2023',
      category: 'Web Application',
      client: 'Kigali Health Centers',
      link: '#'
    },
    {
      title: 'Supply Chain Tracker',
      description: 'Blockchain-based system for tracking agricultural products from farm to market, ensuring transparency and fair trade.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'November 2023',
      category: 'Blockchain',
      client: 'Rwanda Trade Board',
      link: '#'
    },
    {
      title: 'Community Skills Platform',
      description: 'A platform connecting tech mentors with aspiring developers, facilitating knowledge sharing and project collaboration.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'October 2023',
      category: 'Web Platform',
      client: 'Tech Community Rwanda',
      link: '#'
    },
    {
      title: 'Smart City Dashboard',
      description: 'Real-time monitoring and analytics dashboard for urban infrastructure management in Kigali.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'September 2023',
      category: 'IoT Dashboard',
      client: 'Kigali City Council',
      link: '#'
    }
  ];

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Projects"
        subtitle="Innovative Solutions Making an Impact"
      />

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm"
              >
                <Tag className="h-4 w-4 mr-2 text-blue-600" />
                <span className="text-gray-700">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8">
            Let's work together to bring your vision to life
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}