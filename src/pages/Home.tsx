import React from 'react';
import { ArrowRight, Code, Users, BookOpen, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building digital solutions and nurturing tech talent in DRC
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform -skew-y-3 origin-bottom-right"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-600" />,
                title: 'Application Development',
                description: 'Custom software solutions tailored to your needs',
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Coaching & Mentorship',
                description: 'Guiding the next generation of tech professionals',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: 'Knowledge Sharing',
                description: 'Spreading technical expertise and best practices',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Featured Project</h2>
              <h3 className="text-xl text-blue-600 mb-4">Mobile App for Cultivators</h3>
              <p className="text-gray-600 mb-6">
                Empowering farmers with digital tools to enhance agricultural productivity
                and manage their cultivation processes effectively.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Farming App"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join us in building the future of technology in Rwanda
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            Contact Us <Rocket className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}