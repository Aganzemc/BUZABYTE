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
      title:" Développement des applications ",
      description: "Solutions logicielles personnalisées adaptées aux besoins de votre entreprise",
      features: [
        "Développement des applications Web",
        "Développement d'applications mobiles",
        " Intégration et développement d'API",
        'UI/UX design and implementation'
      ]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure technique",
      description: "Des solutions d'infrastructure robustes et évolutives",
      features: [
        "Optimisation de la base de données ",
        "Intégration du système",
        "Suivi des performances"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Coaching & Mentorship',
      description: "Nourrir la prochaine génération de talents technologiques",
      features: [
        "Le coaching et le mentorat",
        "development Développement des compétences techniques",
        " Orientation professionnelle ",
        "Apprentissage par projet "
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Partage de connaissances',
      description: "Diffusion de l’expertise technique et des bonnes pratiques",
      features: [
        ' Ateliers techniques',
        ' Séances de révision de code',
        ' Formation aux bonnes pratiques',
        ' Conseils sur la pile technologique'
      ]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: ' Transformation numérique',
      description: "Aider les organisations à adopter l’innovation numérique",
      features: [
        'Conseil en stratégie digitale',
        ' Automatisation des processus',
        ' Modernisation du système existant',
        ' Planification de l’adoption de technologies'
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: " Laboratoire d'innovation ",
      description: 'Explorer des technologies et des solutions de pointe',
      features: [
        'Recherche technologique',
        "Ateliers d'innovation",
        "Adoption des technologies émergentes "
      ]
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Nos Services"
        subtitle="Des solutions technologiques complètes pour votre réussite"
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
            <h2 className="text-3xl font-bold mb-6"> Pourquoi choisir BUZABYTE ?</h2>
            <p className="text-gray-600 mb-12">
            Nous combinons une expertise technique avec une compréhension approfondie
             du contexte local pour proposer des solutions qui ont un réel
              impact sur le paysage numérique de la RD Congo.
            </p>
            <p className="text-gray-600 mb-12">
            BUZABYTE s’adresse aux jeunes de toutes les couches de la population, 
            avec pour objectif d'améliorer la productivité et la performance, quel que soit 
            le métier exercé. Nous portons une attention particulière aux entrepreneurs, 
            aux étudiants et aux élèves désireux d'améliorer leurs activités quotidiennes.

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: ' Expertise locale',
                description: "Compréhension approfondie de l'écosystème technologique et de l'environnement des affaires de la RD Congo"
              },
              {
                title: ' Accent sur la qualité',
                description:"Engagement à fournir des solutions évolutives de haute qualité"
              },
              {
                title: 'Impact sur la communauté',
                description: "Contribuer à la transformation numérique et à la croissance de la communauté technologique de la RD Congo"
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