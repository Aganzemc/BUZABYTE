import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TeamMember } from '../components/TeamMember';
import { Target, Heart, Users } from 'lucide-react';

import paulinImage from '../images/Teams/paulin.jpg';
import chirstianImage from '../images/Teams/chris.jpg';
import clovisImage from '../images/Teams/clovis.jpg';
import danielImage from '../images/Teams/daniel.jpg';
import userImage from '../images/Teams/user.png';

export function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Mission',
      description: "Developper vos competences afin que vous restiez compétitif dans un mode numérique en constante évolution.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Values',   
      description: "L'excellence, l'innovation, la collaboration et l'apprentissage continu sont le moteur de tout ce que nous faisons.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Community',
      description: "Construire une communauté technologique forte à Bukavu grâce au mentorat et à l'échange de connaissances.",
    },
  ];

  const team = [
    {
      name: 'BAPOLISI AYELE Paulin',
      role: 'Fondateur & PDG',
      image: paulinImage,
      bio: "Passionné de la technologie avec plus d'expérience dans le développement de logiciels.",
    },
    {
      name: 'AGANZE MIRINDI Christian',
      role: 'Fondateur & Développeur des logiciels',
      image: chirstianImage,
      bio: "Passionné de la technologie avec plus d'expérience dans le développement de logiciels.",
    },
    {
      name: 'FURAHA Esther',
      role: 'Fondateur & Comptable',
      image:userImage,
      bio: "Passionné de la technologie avec plus d'expérience dans le développement de logiciels.",
    },

    {
      name: 'AKONKWA MIRINDI Daniel',
      role: 'Fondateur & Chargé de finance',
      image: danielImage,
      bio: "Passionné de la technologie avec plus d'expérience dans le développement de logiciels.",
    },

    {
      name: 'KAMANGALA ISANDA Julien',
      role: 'Fondateur & Formateur',
      image: userImage,
      bio: "Passionné par la création de solutions innovantes et l'encadrement de jeunes développeurs.",
    },

    {   
      name: 'BULANGALIRE KASHABALI Clovis',
      role: 'Fondateur & Chargé de la securité juridique',
      image: clovisImage,
      bio: "Passionné par la création de solutions innovantes et l'encadrement de jeunes développeurs.",
    },
  ];     

  return (
    <div className="pt-16">
      <PageHeader
        title="À propos de nous BUZABYTE"
        subtitle=" Renforcer l'avenir numérique de la RDC "
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Notre histoire </h2>
            <p className="mb-8 text-gray-600">
            Fondée avec la vision de transformer le paysage technologique 
            de la RD Congo, BUZABYTE est née d'une passion pour la technologie
             et d'un engagement envers le développement communautaire. 
             Nous croyons au pouvoir du partage des connaissances et 
             de la croissance collaborative pour construire une RDC plus forte
            et plus avancée technologiquement.
            </p>
            <p className="text-gray-600">
            Aujourd'hui, nous continuons à stimuler l'innovation grâce à 
            nos solutions logicielles tout en formant la prochaine 
            génération de professionnels de la technologie grâce à des 
            initiatives de mentorat et de formation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">Nos valeurs fondamentales </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 transition-shadow duration-200 bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}