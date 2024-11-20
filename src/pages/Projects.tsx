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
            Voir le Projet <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Mimea Ulinzi App',
      description: "Une application mobile qui permet aux cultivateurs de prévenir et dans les cas échéant de prendre soin des leurs cultures vivrières .",
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'Decembre 2024',
      category: 'Mobile App',
      client: 'Les Agriculteurs',
      link: '#'
    },
    {
      title: " Plateforme d'apprentissage en ligne ",
      description:"Une plate-forme interactive offrant une formation technologique aux étudiants à travers le Rwanda, proposant des cours vidéo, des exercices de codage et un mentorat en temps réel.",
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'January 2024',
      category: 'Web Application',
      client: 'Etudiants',
      link: '#'
    },
    {
      title: 'Système de gestion des soins de santé',
      description: "Une solution numérique rationalisant les dossiers des patients, les rendez-vous et la gestion des stocks médicaux pour les cliniques locales.",
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'décembre 2023',
      category: 'Web Application',
      client: ' Centres de Santé de Bukavu',
      link: '#'
    },
    {
      title: "Suivi de la chaîne d'approvisionnement",
      description: "Système basé sur la blockchain pour suivre les produits agricoles de la ferme au marché, garantissant la transparence et le commerce équitable.",
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'Novembre 2023',
      category: 'Blockchain',
      client: ' Office du commerce du Congo',
      link: '#'
    },
 

  ];

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="pt-16">
      <PageHeader
        title="Nos Projets"
        subtitle="Des solutions innovantes"
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
          <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-xl mb-8">
          Travaillons ensemble pour donner vie à votre vision
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
           Démarrer un projet 
          </a>
        </div>
      </section>
    </div>
  );
}