import React from 'react';
import { ArrowRight, Code, Users, BookOpen, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Autonomisation grâce à la technologie
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
            Créer des solutions numériques et développer les talents technologiques en RDC
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-colors duration-200 border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 origin-bottom-right transform -skew-y-3 bg-white"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">Nos Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: ' Développement des applications ',
                description: 'Des solutions logicielles personnalisées adaptées à vos besoins',
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Coaching & mentorat',
                description: 'Guider la prochaine génération de professionnels de la technologie',
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: ' Partage de connaissances',
                description: 'Diffusion de l’expertise technique et des bonnes pratiques',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 transition-shadow duration-200 bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Projet en vedette </h2>
              <h3 className="mb-4 text-xl text-blue-600">Mobile App pour les cultivateurs</h3>
              <p className="mb-6 text-gray-600">
              Donner aux agriculteurs des outils numériques pour améliorer la productivité agricole 
              et gérer efficacement leurs processus de culture.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Farming App"
                className="object-cover w-full h-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white bg-blue-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Prêt à commencer ?</h2>
          <p className="mb-8 text-xl">
          Rejoignez-nous pour construire l'avenir de la technologie en RDCongo
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white transition-colors duration-200 border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
          >
            Contactez-nous <Rocket className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}   